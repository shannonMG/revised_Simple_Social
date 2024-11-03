import { Request, Response } from 'express';
import { CircleUsers, CircleUsersFactory } from '../models/circleUsers.js';

// GET /circles/:circleid
//TO DO: add a query to get the users--query to users table if needed
export const getAllCircleUsers = async (_req: Request, res: Response) => {
  try {
    const circleusers = await CircleUsers.findAll({
      include: [
        {
          model: CircleUsers,
          as: 'user_id', // This should match the alias defined in the association
          // attributes: ['username'], // not sure if this needs to be user or not 
        }, 
      ],
    });
    res.json(circleusers);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET circle/circleuser/:id
//may need an additonal query from the users table
export const getCircleUsersById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await CircleUsers.findByPk(id, {
      include: [
        {
          model: CircleUsers,
          as: 'user_id', // This should match the alias defined in the association
          // attributes: ['username'], // Not sure this needs to be username or circle?
        },
      ],
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'CircleUser not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /circles/circleId/users
export const createCircleUser = async (req: Request, res: Response) => {
  const { user_id, circle_id } = req.body;
  try {
    const newCircleUser = await CircleUsers.create({ user_id, circle_id });
    res.status(201).json();
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /circleuser/:id
export const updateCircleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, circle_id } = req.body;
  try {
    const circleuser = await CircleUsers.findByPk(id);
    if (circleuser) {
      circleuser.user_id = user_id;
      circleuser.circle_id = circle_id;
    
      await post.save();
      res.json(circleuser);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /circleuser/:id
export const deleteCircleUser = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await CircleUsers.findByPk(id);
    if (post) {
      await post.destroy();
      res.json({ message: 'Post deleted' });
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
