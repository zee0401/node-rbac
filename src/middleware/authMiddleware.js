import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token;

  const authHeader = req.headers.authorization || req.headers.Authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    token = authHeader.split(' ')[1];
    console.log(token, 'token');
    if (!token) {
      return res.status(401).json({ message: 'No token provided' });
    }
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
      console.log(req.user, 'req.user');
      next();
    } catch (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
  }
};
