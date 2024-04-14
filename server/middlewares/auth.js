import jwt from "jsonwebtoken";
import { TryCatch } from "./error.js";
import { ErrorHandler } from "../utils/utility.js";
import { adminSecretKey } from "../app.js";

const isAuthenticated = TryCatch(async (req, res, next) => {
  // console.log("cookies",req.cookies);
  // console.log("cookies",req.cookies["Elite-token"]);

  const token = req.cookies["Elite-token"];

  if (!token)
    return next(new ErrorHandler("Please login to access this resource", 401));

  const decodedData = jwt.verify(token, process.env.JWT_SECRET);
  //   console.log(decodedData);

  req.user = decodedData._id;

  next();
});

const adminOnly = TryCatch(async (req, res, next) => {
  const token = req.cookies["Elite-admin-token"];

  if (!token)
    return next(new ErrorHandler("only admin can access this resource", 401));

  const secretKey = jwt.verify(token, process.env.JWT_SECRET);

  const isMatched = secretKey === adminSecretKey;

  if (!isMatched)
    return next(new ErrorHandler("Invalid Admin Secret Key", 401));

  next();
});

export { isAuthenticated, adminOnly };
