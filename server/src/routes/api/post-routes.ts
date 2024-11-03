import express from 'express';
import {
  getAllPosts,
  getPostById,
  createPost,
  updatePost,
  deletePost,
} from '../../controllers/post-controller.js';

const router = express.Router();

// GET / - Get all posts
router.get('/', getAllPosts);

// GET /post/:id - Get a post by id
router.get('/:id', getPostById);

// POST /post - Create a new post
router.post('/', createPost);

// PUT /post/:id - Update a post by id
router.put('/:id', updatePost);

// DELETE /post/:id - Delete a post by id
router.delete('/:id', deletePost);

export default router;