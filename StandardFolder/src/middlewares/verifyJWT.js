import jwt from "jsonwebtoken";
import User from "../schemas/user.js";

export const verifyuserdata = async (req, res, next) => {
  const token = req.cookies.accesstoken || req.headers["authorization"];
  try {
    console.log(token);

    const formatToken = token.split(" ")[1];

    console.log("Token : ", formatToken);

    if (!formatToken)
      return res.status(401).json({ message: "Unauthorizate access..." });

    const decodedata = jwt.decode(formatToken);

    if (!decodedata._id)
      return res.status(401).json({ message: "Unauthorizate access..." });

    const existingUser = await User.findById(decodedata._id).select(
      "-password -refresh_token"
    );

    if (!existingUser)
      return res.status(401).json({ message: "User Not Found..." });

    req.user = existingUser;

    next();
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: "Internal Server Error..." });
  }
};
