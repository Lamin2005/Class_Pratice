import User from "../schemas/user.js";

export const passwordModify = async (req, res) => {
  const { oldpassword, newpassword } = req.body;
  const userId = req.user._id;

  try {
    const userdata = await User.findById(userId);

    if (!userdata) {
      return res.status(404).json({ message: "User not Found..." });
    }

    const passwordMatch = await userdata.isMatched(oldpassword);

    if (!passwordMatch) {
      return res.status(404).json({ message: "Old Password not Match..." });
    }

    userdata.password = newpassword;
    await userdata.save({ validateBeforSave: false });

    return res
      .status(200)
      .json({ message: "Password Update successfully..." });
  } catch (error) {
    console.log("Error Password updating : ", error);
    return res.status(500).json({ message: "Internal Serever Error..." });
  }
};
