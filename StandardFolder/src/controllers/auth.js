import { uploadResult } from "../utils/cloudinary.js";

export const register = async (req, res) => {
  const profile_photo = req.files.profile_photo[0].patch;
  const cover_photo = req.files.cover_photo[0].patch;

  if (profile_photo) {
    try {
      const response = await uploadResult(profile_photo);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
};
