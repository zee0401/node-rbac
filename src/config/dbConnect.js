import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const connectDB = await mongoose.connect(process.env.MONGO_DB);
    console.log(`Connected to MongoDB: ${connectDB.connection.host}`);
  } catch (err) {
    console.log(err);
  }
};
