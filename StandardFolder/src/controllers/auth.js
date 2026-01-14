import { log } from "console";
import { uploadResult } from "../utils/cloudinary.js";
import fs from "fs";
import User from "../schemas/user.js";

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const profile_photo = req.files.profile_photo[0].path;
  const cover_photo = req.files.cover_photo[0].path;

  if ([username, email, password].some((field) => field.trim() === "")) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });

    if (existingUser) {
      fs.unlinkSync(profile_photo);
      fs.unlinkSync(cover_photo);
      return res
        .status(409)
        .json({ message: "User with given email or username already exists" });
    }

    let profile_url = "";
    let cover_url = "";

    if (profile_photo && cover_photo) {
      profile_url = await uploadResult(profile_photo);
      cover_url = await uploadResult(cover_photo);

      console.log("Profile Photo URL:", profile_url);
      console.log("Cover Photo URL:", cover_url);
    }

    const newUser = await User.create({
      username: username.toLowerCase(),
      email,
      password,
      profile_photo: profile_url,
      cover_photo: cover_url,
    });

    if (!newUser) {
      return res.status(400).json({ message: "User registration failed" });
    }

    const userdata = await User.findById(newUser._id).select(
      "-password -refresh_token"
    );

    return res
      .status(201)
      .json({ message: "User registered successfully", user: userdata });
  } catch (error) {
    if (profile_photo && fs.existsSync(profile_photo)) {
      fs.unlinkSync(profile_photo);
    }

    if (cover_photo && fs.existsSync(cover_photo)) {
      fs.unlinkSync(cover_photo);
    }
    console.log("Error during registration:", error);
    return res.status(500).json({ message: "Server error" });
  }
};
