import { Request, Response } from 'express';
import User from '../models/User';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password, location, time_zone } = req.body;

    if (!email || !password) {
      res.status(400).json({ error: 'Email and password are required' });
      return;
    }

    const newUser = await User.create({
      email,
      password,
      location,
      time_zone,
    });

    res.status(201).json({
      id: newUser.id,
      email: newUser.email,
      location: newUser.location,
      time_zone: newUser.time_zone,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
