// src/routes/index.ts
import { Router } from 'express';
import userRoutes from  '../routes/api/user-routes'

const router = Router();

// Mount userRoutes at `/api`
router.use('/api', userRoutes);

export default router;
