import { User } from "../models/userModel.js";

export const registerController = async (res, res) => {
  const { userName, password, role } = req.body;

  if (!userName || !password || !role) {
    res.status(400).json({ message: "Please provide all the fields" });
  }

  //  find user by email if already exists
  const user = await User.findOne({ userName });

  if (user) {
    res.status(400).json({ message: "User already exists" });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ userName, password: hashPassword, role });

    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(400).json({ message: "Invalid data" });
  }
};

export const loginController = async (req, res) => {
  const { userName, password } = req.body;

  if (!userName || !password) {
    res.status(400).json({ message: "Please provide all the fields" });
  }

  const user = await User.findOne({ userName });
};
