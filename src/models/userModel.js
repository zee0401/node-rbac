import mongoose from "mongoose";

const userShema = new mongoose.Schema({
  userName: {
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
    enum: ["admin", "user", "manager"],
  },
  timestamps: true,
});

export const User = mongoose.model("User", userShema);
