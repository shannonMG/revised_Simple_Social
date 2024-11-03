import express from 'express';
import { createUser } from '../controllers/User';

const router = express.Router();

// Route to create a new user
router.post('/create', createUser);


export default router;
