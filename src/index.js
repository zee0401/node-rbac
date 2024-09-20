import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./config/dbConnect.js";
dotenv.config();

const app = express();

//middleware
app.use(express.json());

//routes

//connect mongodb

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Server is running on port 3000");
});
