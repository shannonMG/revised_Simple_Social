import { Router, Request, Response, NextFunction } from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

// Define the login function with explicit return type `Promise<void>`
export const login = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      where: { email },
    });

    if (!user) {
      res.status(401).json({ message: 'Authentication failed' });
      return;
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
      res.status(401).json({ message: 'Authentication failed' });
      return;
    }

    const secretKey = process.env.JWT_SECRET_KEY || 'defaultSecretKey';
    const token = jwt.sign({ userId: user.id, email: user.email }, secretKey, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    next(error);
  }
};

const router = Router();

// POST /login - Login a user
router.post('/login', login);

export default router;
