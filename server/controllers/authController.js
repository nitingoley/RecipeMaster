import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

// Register a new user 


export const register = async (req, res) => {
  try {
    // Extract name, email, and password from request body
    const { name, email, password } = req.body;
    // Hash the password before saving
    const hash = await bcrypt.hash(password, 10);
    // Create a new user instance
    const user = new User({ name, email, password: hash });
    // Save the user to the database
    await user.save();
    // Respond with success message
    res.status(201).json({ message: "User registered" });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "internal server" });
  }
};

// Login an existing user
export const login = async (req, res) => {
  try {
    // Extract email and password from request body
    const { email, password } = req.body;
    // Find user by email
    const user = await User.findOne({ email });
    // Generate JWT token with user id
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    // Respond with token and user info
    res.json({ token, user });
  } catch (error) {
    // Handle errors
    res.status(500).json({ message: "internal server" });
  }
};
