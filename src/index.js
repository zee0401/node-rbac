import express from 'express';
import { connectDB } from './config/dbConnect.js';
import dotenv from 'dotenv';

import authRoutes from './routes/auth.routes.js';
import userRoutes from './routes/user.routes.js';

const app = express();
dotenv.config();

// middleware
app.use(express.json());

// routes

app.use('/api/auth', authRoutes);

app.use('/api/users', userRoutes);

app.listen(process.env.PORT, () => {
  connectDB();
  console.log('Server is running on port 3000');
});
