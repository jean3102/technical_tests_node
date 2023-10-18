import express from 'express';
import { createItems, deleteItems, getItems, updatedItems } from './services.js';
const itemRouter = express.Router();

itemRouter.get('/items', getItems);
itemRouter.post('/items', createItems);
itemRouter.delete('/items/:id', deleteItems);
itemRouter.put('/items/:id', updatedItems);

export default itemRouter;
