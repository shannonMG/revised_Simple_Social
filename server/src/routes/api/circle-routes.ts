import express from 'express';
import {
  getAllCircle,
  getCircleById,
  createCircle,
  
} from '../../controllers/circle-controller.js';

const router = express.Router();

// GET / - Get all circle
router.get('/', getAllCircle);

// GET /circle/:id - Get a circle by id 
router.get('/:id', getCircleById);

// POST /circle - Create a new circle
router.post('/', createCircle);





export { router as circleRouter };
