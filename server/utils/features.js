import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "Elite-Chat" })
    .then((data) => {
      console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};

const cookieOptions = {
  expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
  sameSite: "none",
  httpOnly: true,
  secure: true,
};

const sendToken = (res, user, statusCode, message) => {
  const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);
  return res
    .status(statusCode)
    .cookie("Elite-token", token, cookieOptions)
    .json({
      success: true,
      user,
    });
};


const emitEvent = (req,event,users,data) => {
  console.log("Emitting Event",event);
}

const deleteFilesFromCloudinary = async(public_ids) => {
  // Delete files from cloudinary
}

export { connectDB, sendToken, cookieOptions, emitEvent,deleteFilesFromCloudinary };
