import { Request, Response } from 'express';
import { Circle } from '../models/circle.js';
import  User from '../models/user.js';

// GET /circle
export const getAllCircle = async (_req: Request, res: Response) => {
  try {
    const circles = await Circle.findAll({
      include: [
        {
          model: User,
          as: 'assignedUserId', // This should match the alias defined in the association
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    res.json(circles);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /circles/:id
export const getCircleById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const circle = await Circle.findByPk(id, {
      include: [
        {
          model: User,
          as: 'assignedUser', // This should match the alias defined in the association
          attributes: ['username'], // Include only the username attribute
        },
      ],
    });
    if (circle) {
      res.json(circle);
    } else {
      res.status(404).json({ message: 'Social Circle not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /circle
export const createCircle = async (req: Request, res: Response) => {
  const { name, permission_key, assignedUserId } = req.body;
  try {
    const newCircle = await Circle.create({ name, permission_key, assignedUserId });
    res.status(201).json(newCircle);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /circle/:id
export const updateCircle = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, permission_key, assignedUserId } = req.body;
  try {
    const circle = await Circle.findByPk(id);
    if (circle) {
      circle.name = name;
      circle.permission_key = permission_key;
      circle.assignedUserId = assignedUserId;
      await circle.save();
      res.json(circle);
    } else {
      res.status(404).json({ message: 'Circle not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /circle/:id
export const deleteCircle = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const circle = await Circle.findByPk(id);
    if (circle) {
      await circle.destroy();
      res.json({ message: 'Circle deleted' });
    } else {
      res.status(404).json({ message: 'Circle not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
