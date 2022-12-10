import express from 'express';
import { academicPlanController } from '../controllers/academicPlan.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const academicPlanRouter = express.Router();

academicPlanRouter.get('/', requestWrapper(academicPlanController.readAll));
academicPlanRouter.get('/:id', requestWrapper(academicPlanController.readById));
academicPlanRouter.post('/', requestWrapper(academicPlanController.create));
academicPlanRouter.put('/:id', requestWrapper(academicPlanController.update));
academicPlanRouter.delete('/:id', requestWrapper(academicPlanController.delete));
