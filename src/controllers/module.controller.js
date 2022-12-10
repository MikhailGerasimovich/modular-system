import { moduleService } from '../services/module.service.js';
import { StatusCodes } from 'http-status-codes';

class ModuleController {
    async readAll(req, res) {
        const modules = await moduleService.readAll();
        res.status(StatusCodes.OK).json(modules);
    }

    async readById(req, res) {
        const { id } = req.params;
        const module = await moduleService.readById(id);
        res.status(StatusCodes.OK).json(module);
    }

    async create(req, res) {
        const { lecture_number, practical_number, laboratory_number, discipline_academic_plan_id } =
            req.body;
        const module = await moduleService.create(
            lecture_number,
            practical_number,
            laboratory_number,
            discipline_academic_plan_id,
        );
        res.status(StatusCodes.CREATED).json(module);
    }

    async update(req, res) {
        const { id } = req.params;
        const { lecture_number, practical_number, laboratory_number, discipline_academic_plan_id } =
            req.body;
        const updatedModule = await moduleService.update(
            lecture_number,
            practical_number,
            laboratory_number,
            discipline_academic_plan_id,
            id,
        );
        res.status(StatusCodes.OK).json(updatedModule);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedModule = await moduleService.delete(id);
        res.status(StatusCodes.OK).json(deletedModule);
    }
}

export const moduleController = new ModuleController();
