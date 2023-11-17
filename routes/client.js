import express from 'express';
import Client from '../models/Client.js';
import { createClient, updateClient, getAllClients,deleteClient } from '../controllers/client.controller.js';

const router = express.Router();


//Create a New Client
router.post('/create', createClient);

// Update client in db
router.patch('/update/:id', updateClient);

// Get all clients 
router.get('/getAll', getAllClients);

// Delete client from DB
router.delete('/deleteclient/:id', deleteClient);

export default router;