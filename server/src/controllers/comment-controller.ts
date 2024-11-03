import { Request, Response } from 'express';
import Post from '../models/post.js';  // Import Post model
import Comment from '../models/comment.js'; 
// GET /post/:postId/comments
//may need to add a clause for filtering to limit those assocaited with the post
export const getAllPostComments = async (_req: Request, res: Response) => {
  try {
    const postComments = await Comment.findAll({
      include: [
        {
          model: Post,
          as: 'post_id', // This should match the alias defined in the association
          // attributes: ['username'], // not sure if this needs to be user or not 
        },
      ],
    });
    res.json(postComments);
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// GET /posts/:postId/comments
export const getPostCommentsId = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const postComments = await Comment.findByPk(id, {
      include: [
        {
          model: Post,
          as: 'post_id', // This should match the alias defined in the association
          // attributes: ['username'], // Not sure this needs to be username or circle?
        },
      ],
    });
    if (postComments) {
      res.json(postComments);
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

// POST /posts/:postId/comments
export const createPostComment = async (req: Request, res: Response) => {
  const { user_id, comment_content, commentable_type, commentable_id } = req.body;
  try {
    const newComment = await Comment.create({ user_id, comment_content, commentable_type, commentable_id });
    res.status(201).json(newComment);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// PUT /posts/:postId/comments
export const updatePostComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { user_id,comment_content, commentable_type, commentable_id } = req.body;
  try {
    const comment = await Comment.findByPk(id);
    if (comment) {
      comment.user_id = user_id;
      comment.comment_content = comment_content;
      comment.commentable_type=commentable_type
    
      await comment.save();
      res.json(comment);
    } else {
      res.status(404).json({ message: 'Post not found' });
    }
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

// DELETE /post/:id
export const deletePostComment = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const post = await Comment.findByPk(id);
    if (post) {
      await post.destroy();
      res.json({ message: 'Comment deleted' });
    } else {
      res.status(404).json({ message: 'Comment not found' });
    }
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
