import { Request, Response } from 'express';
import { Circle } from '../models/circle.js';
import Post from '../models/post'

// GET /posts
export const getAllPosts = async (_req: Request, res: Response) => {
  try {
    const posts = await Post.findAll({
      include: [
        {
          model: Circle,
          as: 'circle_id', // This should match the alias defined in the association
          // attributes: ['username'], // not 100% sure what this should be
        },
      ],
    });
    res.json(posts);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /posts/:id
export const getPostById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id, {
      include: [
        {
          model: Circle,
          as: 'circle_id', // This should match the alias defined in the association
          // attributes: ['username'], // Not sure this needs to be username or circle?
        },
      ],
    });
    if (post) {
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /post/:id
export const createPost = async (req: Request, res: Response) => {
  const { user_id, circle_id, content } = req.body;
  try {
    const newPost = await Post.create({ user_id, circle_id, content });
    res.status(201).json(newPost);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /post/:id
export const updatePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id, circle_id, content } = req.body;
  try {
    const post = await Post.findByPk(id);
    if (post) {
      post.user_id = user_id;
      post.circle_id = circle_id;
      post.content = content;
      await post.save();
      res.json(post);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /post/:id
export const deletePost = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Post.findByPk(id);
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
