import jwt from "jsonwebtoken";
import User from "../models/User.js"; // only if you need user data

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("🔒 No token provided");
      return res.status(401).json({ message: "No token provided" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.id;

    console.log("🔓 Authenticated user:", decoded.id);
    next();
  } catch (err) {
    console.log("🚫 JWT ERROR:", err.message);
    return res.status(403).json({ message: "Invalid or expired token" });
  }
};
