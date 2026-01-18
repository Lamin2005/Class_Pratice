import jwt from "jsonwebtoken";
import User from "../schemas/user.js";

export const verifyuserdata = async (req, res, next) => {
  try {
    const token = req.cookies.accesstoken || req.headers.authorization;

    if (!token) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const formatToken = token.startsWith("Bearer ")
      ? token.split(" ")[1]
      : token;

    const decodedata = jwt.verify(formatToken, process.env.JWT_SECRET_KEY);

    const existingUser = await User.findById(decodedata._id).select(
      "-password -refresh_token"
    );

    if (!existingUser) {
      return res.status(401).json({ message: "User not found" });
    }

    req.user = existingUser;
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({ message: "Token expired" });
    }

    return res.status(401).json({ message: "Invalid token" });
  }
};
