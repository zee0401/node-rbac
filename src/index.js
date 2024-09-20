import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();

//middleware
app.use(express.json());

//routes

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});
