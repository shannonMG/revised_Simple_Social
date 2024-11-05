import express from 'express';
import {
  getUserCircles
} from '../../controllers/circleuser-controller.js';

const router = express.Router();

// GET / - Get all circleusers


// // GET /circleuser/:id - Get a circleuser by id
// router.get('/circleuser/:id', getCircleUsersById);

// // POST /circleuser - Create a new circleuser
// router.post('/', createCircleUser);

// // PUT /circleuser/:id - Update a circleuser by id
// router.put('/:id', updateCircleUser);

// // DELETE /circleuser/:id - Delete a circleuser by id
// router.delete('/:id', deleteCircleUser);

export default router;