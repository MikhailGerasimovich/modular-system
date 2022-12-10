import express from 'express';
import { departmentController } from '../controllers/department.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const departmentRouter = express.Router();

departmentRouter.get('/', requestWrapper(departmentController.readAll));
departmentRouter.get('/:id', requestWrapper(departmentController.readById));
departmentRouter.post('/', requestWrapper(departmentController.create));
departmentRouter.put('/:id', requestWrapper(departmentController.update));
departmentRouter.delete('/:id', requestWrapper(departmentController.delete));
