import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";
import fs from "fs";

// Configuration
cloudinary.config({
  cloud_name: "dckodu7ag",
  api_key: "667355235245451",
  api_secret: process.env.SECRET_KEY,
});

// Upload an image
const uploadResult = async (imagePath) => {
  try {
    if (!imagePath) return null;

    const response = await cloudinary.uploader.upload(imagePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(imagePath);
    console.log("Cloudinary Response Url:", response.url);

    return response.url;
  } catch (error) {
    console.log(error);
    fs.unlinkSync(imagePath);
    return null;
  }
};

export { uploadResult };
