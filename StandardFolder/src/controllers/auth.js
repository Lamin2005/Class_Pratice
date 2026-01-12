import { log } from "console";
import { uploadResult } from "../utils/cloudinary.js";
import fs from "fs";

export const register = async (req, res) => {
   const profile_photo = req.files.profile_photo[0].path;
   const cover_photo = req.files.cover_photo[0].path;

   let profile_url = "";
   let cover_url = "";

  if (profile_photo && cover_photo) {
    try {
      profile_url = await uploadResult(profile_photo);
      cover_url = await uploadResult(cover_photo);

      console.log("Profile Photo URL:", profile_url);
      console.log("Cover Photo URL:", cover_url);
    } catch (error) {
      console.log("Error uploading photos:", error);
      fs.unlinkSync(profile_photo);
      fs.unlinkSync(cover_photo);
    }
  }else{
    console.log("No profile photo uploaded");
  }



  
};
