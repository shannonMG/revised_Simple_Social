import express from 'express';
import {
  getAllPostComments,
  getPostCommentsId,
  createPostComment,
  updatePostComment,
  deletePostComment,
} from '../../controllers/comment-controller.js';

const router = express.Router();

// GET / - Get all comments from post
router.get('/', getAllPostComments);

// GET /comment/:id - Get a comment from post by id
router.get('/:id', getPostCommentsId);

// POST /comment - Create a new comment for a post
router.post('/', createPostComment);

// PUT /comment/:id - Update a new comment for a post by id
router.put('/:id', updatePostComment);

// DELETE /comments/:commentid - Delete a comment from  by id
router.delete('/:id', deletePostComment);

export default router;