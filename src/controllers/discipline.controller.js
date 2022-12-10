import { disciplineService } from '../services/discipline.service.js';
import { StatusCodes } from 'http-status-codes';

class DisciplineController {
    async readAll(req, res) {
        const disciplines = await disciplineService.readAll();
        res.status(StatusCodes.OK).json(disciplines);
    }

    async readById(req, res) {
        const { id } = req.params;
        const discipline = await disciplineService.readById(id);
        res.status(StatusCodes.OK).json(discipline);
    }

    async create(req, res) {
        const { title, short_title } = req.body;
        const discipline = await disciplineService.create(title, short_title);
        res.status(StatusCodes.CREATED).json(discipline);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, short_title } = req.body;
        const updatedDiscipline = await disciplineService.update(title, short_title, id);
        res.status(StatusCodes.OK).json(updatedDiscipline);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedDiscipline = await disciplineService.delete(id);
        res.status(StatusCodes.OK).json(deletedDiscipline);
    }
}

export const disciplineController = new DisciplineController();
