import User from "../schemas/user.js";

export const profile = async (req, res) => {
  const userId = req.user._id;
  try {
    const user = await User.findById(userId).select("-password -refresh_token");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({ user });
  } catch (error) {
    console.log("Profile Getting error : ", error);
    return res.status(500).json({ message: "Internal Server Error..." });
  }
};

export const profileUpdate = async (req, res) => {
  const userId = req.user._id;
  let { username, email } = req.body;

  try {
    const userProfileUpdate = await User.findByIdAndUpdate(
      userId,
      { username: username.toLowerCase(), email },
      { new: true }
    );

    console.log(userProfileUpdate);

    if (!userProfileUpdate) {
      return res.status(400).json({ message: "Profile update failed" });
    }

    const updatedUserData = await User.findById(userId).select(
      "-password -refresh_token"
    );

    return res.status(200).json({
      message: "Profile updated successfully",
      result: updatedUserData,
    });
  } catch (error) {
    console.log("Profile Update error : ", error);
    return res.status(500).json({ message: "Internal Server Error..." });
  }
};
