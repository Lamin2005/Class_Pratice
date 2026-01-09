import { v2 as cloudinary } from "cloudinary";

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
    console.log(response);
  } catch (error) {
    console.log(error);
    return null;
  }
};

export { cloudinary, uploadResult };
