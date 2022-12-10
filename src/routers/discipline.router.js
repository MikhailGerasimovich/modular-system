import express from 'express';
import { disciplineController } from '../controllers/discipline.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const disciplineRouter = express.Router();

disciplineRouter.get('/', requestWrapper(disciplineController.readAll));
disciplineRouter.get('/:id', requestWrapper(disciplineController.readById));
disciplineRouter.post('/', requestWrapper(disciplineController.create));
disciplineRouter.put('/:id', requestWrapper(disciplineController.update));
disciplineRouter.delete('/:id', requestWrapper(disciplineController.delete));
