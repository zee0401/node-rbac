import mongoose from 'mongoose';

const userShema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
    enum: ['admin', 'user', 'manager'],
  },
  timestamps: {
    createdAt: Date,
  },
});

export const User = mongoose.model('User', userShema);
