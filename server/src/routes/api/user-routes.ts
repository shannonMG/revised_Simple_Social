// src/routes/userRoutes.ts
import express, {Router, RequestHandler,Request, Response } from 'express';
import User from '../../models/User'; // Ensure the model path is correct
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const router: Router = express.Router();
const JWT_SECRET = process.env.JWT_SECRET || 'your_secret_key'; // Replace with a secure key in production

// Registration handler
const registerHandler: RequestHandler = async (req, res) => {
  try {
    const { email, password, location, time_zone } = req.body; // Destructure location and time_zone from req.body

    // Check if the user already exists
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      res.status(400).json({ message: 'User already exists' });
      return; // Use a standalone return to indicate void
    }

// Hash the password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

// Create a new user
    const newUser = await User.create({
      email,
      password: hashedPassword,
      location,
      time_zone,
    });

// Generate a JWT token
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, JWT_SECRET, { expiresIn: '1h' });

// Respond with the token
    res.status(201).json({ message: 'User created', token });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Error creating user' });
  }
};

// Login handler
const loginHandler: RequestHandler = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({ message: 'Email and password are required.' });
      return; // End function execution without returning the response object
    }

    const user = await User.findOne({ where: { email } });
    if (!user) {
      console.log("User not found");
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    console.log("Stored hashed password:", user.password); // Log the hashed password from the database
    console.log("Entered password:", password); // Log the plain text password

    const isMatch = await bcrypt.compare(password, user.password);
    console.log("Password match result:", isMatch); // Check if the passwords match

    if (!isMatch) {
      res.status(400).json({ message: 'Invalid email or password' });
      return;
    }

    const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });
    res.status(200).json({ message: 'Login successful', token });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'An error occurred during login' });
  }
};


// Define routes
router.post('/create', registerHandler);
router.post('/login', loginHandler);

export default router;
