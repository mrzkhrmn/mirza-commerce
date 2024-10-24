import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    if (!email || !username || !password) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required!" });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid email!" });
    }

    if (password.length < 6) {
      return res.status(400).json({
        success: false,
        message: "password must be at lesat 6 chracters!",
      });
    }

    const existingUserByEmail = await User.findOne({ email });

    if (existingUserByEmail)
      return res.status(400).json({ error: "This user already exists!" });

    const existingUserByUsername = await User.findOne({ username });

    if (existingUserByUsername)
      return res.status(400).json({ error: "This user already exists!" });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};

export const logout = async (req, res) => {
  try {
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: error.message });
  }
};