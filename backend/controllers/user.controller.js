import User from "../models/user.model";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});

    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.log(`Error in getAllProducts ${error.message}`);
  }
};
