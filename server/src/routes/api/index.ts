// src/routes/api/index.ts
import express from 'express';
import userRoutes from './user-routes';
import postRoutes from './post-routes';

const router = express.Router();

router.use('/users', userRoutes); // This will handle routes at /api/users
router.use('/posts', postRoutes); // This will handle routes at /api/users

export default router; // Export the router as the default export
