import express from 'express';
import { verifyToken } from '../middleware/authMiddleware.js';
import { roleMiddleware } from '../middleware/roleMiddleware.js';

const router = express.Router();

router.get('/admin', verifyToken, roleMiddleware('admin'), (req, res) => {
  res.send('Hello from adnin routes');
});

router.get(
  '/manager',
  verifyToken,
  roleMiddleware('admin', 'manager'),
  (req, res) => {
    res.send('Hello from manager routes');
  }
);

router.get(
  '/user',
  verifyToken,
  roleMiddleware('manager', 'admin', 'user'),
  (req, res) => {
    res.send('Hello from user routes');
  }
);

export default router;
