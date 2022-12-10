import express from 'express';
import { teacherDisciplineController } from '../controllers/teacherDiscipline.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const teacherDisciplineRouter = express.Router();

teacherDisciplineRouter.get('/', requestWrapper(teacherDisciplineController.readAll));
teacherDisciplineRouter.get('/:id', requestWrapper(teacherDisciplineController.readById));
teacherDisciplineRouter.post('/', requestWrapper(teacherDisciplineController.create));
teacherDisciplineRouter.put('/:id', requestWrapper(teacherDisciplineController.update));
teacherDisciplineRouter.delete('/:id', requestWrapper(teacherDisciplineController.delete));
