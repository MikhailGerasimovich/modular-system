import express from 'express';
import { taskController } from '../controllers/task.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const taskRouter = express.Router();

taskRouter.get('/', requestWrapper(taskController.readAll));
taskRouter.get('/:id', requestWrapper(taskController.readById));
taskRouter.post('/', requestWrapper(taskController.create));
taskRouter.put('/:id', requestWrapper(taskController.update));
taskRouter.delete('/:id', requestWrapper(taskController.delete));
