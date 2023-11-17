import express from 'express';
import { getAllUsers, getById } from '../controllers/user.controller.js';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';

const router = express.Router();


// this is to get all
router.get('/', verifyAdmin, getAllUsers);


//this is get by id 
router.get('/:id', verifyUser, getById);

export default router;