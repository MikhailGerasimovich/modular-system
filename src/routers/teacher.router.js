import express from 'express';
import { teacherController } from '../controllers/teacher.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const teacherRouter = express.Router();

teacherRouter.get('/', requestWrapper(teacherController.readAll));
teacherRouter.get('/:id', requestWrapper(teacherController.readById));
teacherRouter.post('/', requestWrapper(teacherController.create));
teacherRouter.put('/:id', requestWrapper(teacherController.update));
teacherRouter.delete('/:id', requestWrapper(teacherController.delete));
