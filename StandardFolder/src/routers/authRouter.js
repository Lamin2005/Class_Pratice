import { login, register, generateRefreshTokens } from "../controllers/auth.js";
import express from "express";
import { upload } from "../middlewares/multer-storage.js";

const router = express.Router();

router.post(
  "/register",
  upload.fields([
    { name: "profile_photo", maxCount: 1 },
    { name: "cover_photo", maxCount: 1 },
  ]),
  register
);

router.post("/login", login);
router.post("/refresh-token", generateRefreshTokens);

export default router;
