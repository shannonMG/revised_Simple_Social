import express, { Request, Response, Router, RequestHandler } from 'express';
import User from '../../models/user';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const router: Router = express.Router();
const SECRET_KEY = process.env.JWT_SECRET || '195f2752525a316a3f97dd8401fee9f65a0b0ec96c5ce22c9ccb42b2706b44b1b02b492b6801e8dadef9cf0ba90b8203698e8a2b80a43853282d517799bcfd64';

// Registration route
const registerHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return;
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({ email, password: hashedPassword });

    const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Login route
const loginHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      res.status(400).json({ message: 'Invalid credentials' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ message: 'Logged in successfully', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error logging in' });
  }
};

// Attach the handlers to routes
router.post('/register', registerHandler);
router.post('/login', loginHandler);

export default router;