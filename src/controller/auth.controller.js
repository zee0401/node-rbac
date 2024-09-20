import { User } from '../models/userModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const registerController = async (req, res) => {
  const { username, password, role } = req.body;

  if (!username || !password || !role) {
    return res.status(400).json({ message: 'Please provide all the fields' });
  }

  //  find user by email if already exists
  const user = await User.findOne({ username });

  if (user) {
    res.status(400).json({ message: 'User already exists' });
  }

  try {
    const hashPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashPassword, role });

    await newUser.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid data' });
  }
};

export const loginController = async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Please provide all the fields' });
  }

  try {
    const user = await User.findOne({ username });
    console.log(user, 'user');

    if (!user) {
      res.status(400).json({ message: 'User not found' });
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (!isPasswordMatch) {
      res.status(400).json({ message: 'Invalid Username or Password' });
    }

    const token = jwt.sign(
      { userName: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    return res.status(200).json({ message: 'Login Successful', token: token });
  } catch (err) {
    return res.status(400).json({ message: 'Invalid data' });
  }
};
