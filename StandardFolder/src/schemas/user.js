import mongoose from "mongoose";
import { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      index: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: { type: String, required: true, trim: true },
    profile_photo: { type: String },
    posts: [
      {
        type: Schema.Types.ObjectId,
        ref: "Post",
      },
    ],
  },
  { timestamps: true }
);

userSchema.pre("save", async function (password) {
  if (!this.isModified("password")) {
    return next();
  }

  this.password = bcrypt.hash(this.password, 10);
  next();
});

userSchema.methods.isMatched = async function (password) {
  return await bcrypt.compare(password, this.password);
};

userSchema.methods.generateToken = async function () {
  jwt.sign(
    {
      _id: this._id,
      name: this.name,
      email: this.email,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRE_TIME,
    }
  );
};

userSchema.methods.refreshToken = async function () {
  jwt.sign(
    {
      _id: this._id,
    },
    process.env.SECRET_KEY,
    {
      expiresIn: process.env.EXPIRE_TIME,
    }
  );
};

userSchema.plugin(mongooseAggregatePaginate);
const User = mongoose.model("User", userSchema);
export default User;
