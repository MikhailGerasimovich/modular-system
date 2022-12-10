import express from 'express';
import { specialityController } from '../controllers/speciality.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const specialityRouter = express.Router();

specialityRouter.get('/', requestWrapper(specialityController.readAll));
specialityRouter.get('/:id', requestWrapper(specialityController.readById));
specialityRouter.post('/', requestWrapper(specialityController.create));
specialityRouter.put('/:id', requestWrapper(specialityController.update));
specialityRouter.delete('/:id', requestWrapper(specialityController.delete));
