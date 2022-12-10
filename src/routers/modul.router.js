import express from 'express';
import { moduleController } from '../controllers/module.controller.js';
import { requestWrapper } from '../middleware/requestWrapper.js';

export const moduleRouter = express.Router();

moduleRouter.get('/', requestWrapper(moduleController.readAll));
moduleRouter.get('/:id', requestWrapper(moduleController.readById));
moduleRouter.post('/', requestWrapper(moduleController.create));
moduleRouter.put('/:id', requestWrapper(moduleController.update));
moduleRouter.delete('/:id', requestWrapper(moduleController.delete));
