import express from 'express';
import { disciplineAcademicPlanController } from '../controllers/disciplineAcademicPlan.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const disciplineAcademicPlanRouter = express.Router();

disciplineAcademicPlanRouter.get('/', requestWrapper(disciplineAcademicPlanController.readAll));
disciplineAcademicPlanRouter.get('/:id', requestWrapper(disciplineAcademicPlanController.readById));
disciplineAcademicPlanRouter.post('/', requestWrapper(disciplineAcademicPlanController.create));
disciplineAcademicPlanRouter.put('/:id', requestWrapper(disciplineAcademicPlanController.update));
disciplineAcademicPlanRouter.delete('/:id', requestWrapper(disciplineAcademicPlanController.delete));
