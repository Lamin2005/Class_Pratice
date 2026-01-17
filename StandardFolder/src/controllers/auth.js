import { uploadResult } from "../utils/cloudinary.js";
import fs from "fs";
import User from "../schemas/user.js";
import jwt from "jsonwebtoken";

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
      res
        .status(409)
        .json({ message: "User with given email or username already exists" });
      throw new Error("User with given email or username already exists");
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
  }
};

const generateTokens = async (userid) => {
  const existingUser = await User.findById(userid);

  if (!existingUser) return res.status(404).json({ message: "User not Found" });

  const accessToken = existingUser.generateToken();
  const refreshToken = existingUser.refreshToken();

  existingUser.refresh_token = refreshToken;
  await existingUser.save({ validateBeforSave: false });

  return { accessToken, refreshToken };
};

export const login = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existingUser = await User.findOne({
      $and: [{ username }, { email }],
    });

    if (!existingUser)
      return res.status(404).json({ message: "User not Found" });

    const checkPassword = await existingUser.isMatched(password);

    if (!checkPassword)
      return res.status(401).json({ message: "Password not correct!" });

    const { accessToken, refreshToken } = await generateTokens(
      existingUser._id
    );

    console.log(accessToken);

    const CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    const userdata = await User.findById(existingUser._id).select(
      "-password -refresh_token"
    );

    return res
      .status(200)
      .cookie("accesstoken", accessToken, CookieOptions)
      .cookie("refreshtoken", refreshToken, CookieOptions)
      .json({ message: "User login successfully...", result: userdata });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const generateRefreshTokens = async (req, res) => {
  const { refreshtoken } = req.cookies.refreshtoken || req.body;

  try {
    if (!refreshtoken)
      return res.status(401).json({ message: "No refresh Token..." });

    const decodedata = jwt.verify(refreshtoken, process.env.JWT_SECRET_KEY);

    const existingUser = await User.findById(decodedata?._id);

    if (!existingUser)
      return res.status(401).json({ message: "No User Found..." });

    if (existingUser.refresh_token !== refreshtoken)
      return res.status(401).json({ message: "Invalid Refresh Token..." });

    const CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    const { accessToken, refreshToken } = await generateTokens(
      existingUser._id
    );

    return res
      .status(200)
      .cookie("accesstoken", accessToken, CookieOptions)
      .cookie("refreshtoken", refreshToken, CookieOptions)
      .json({ message: "Refresh Token Updating successfully..." });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error" });
  }
};

export const logout = async (req, res) => {
  try {
    if (!req.user || !req.user._id)
      return res
        .status(401)
        .json({ message: "Logout Unauthorizate access..." });

    const update = await User.findByIdAndUpdate(
      req.user._id,
      {
        $unset: {
          refresh_token: 1,
        },
      },
      {
        new: true,
      }
    );

    console.log(update);

    const CookieOptions = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    };

    return res
      .status(200)
      .clearCookie("accesstoken", CookieOptions)
      .clearCookie("refreshtoken", CookieOptions)
      .json({ message: `${update.username} Logout successfully...` });
  } catch (error) {}
};
