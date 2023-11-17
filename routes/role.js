import express from 'express';
import Role from '../models/Role.js';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router();


//Create a New Role
router.post('/create', verifyAdmin, createRole);

// Update role in db
router.put('/update/:id', verifyAdmin, updateRole);

// Get all roles 
router.get('/getAll', getAllRoles);

// Delete role from DB
router.delete('/deleteRole/:id', deleteRole);

export default router;