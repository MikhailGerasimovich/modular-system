import { specialityService } from '../services/speciality.service.js';
import { StatusCodes } from 'http-status-codes';

class SpecialityController {
    async readAll(req, res) {
        const specialities = await specialityService.readAll();
        res.status(StatusCodes.OK).json(specialities);
    }

    async readById(req, res) {
        const { id } = req.params;
        const speciality = await specialityService.readById(id);
        res.status(StatusCodes.OK).json(speciality);
    }

    async create(req, res) {
        const { title, short_title } = req.body;
        const speciality = await specialityService.create(title, short_title);
        res.status(StatusCodes.CREATED).json(speciality);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, short_title } = req.body;
        const updatedSpeciality = await specialityService.update(title, short_title, id);
        res.status(StatusCodes.OK).json(updatedSpeciality);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedSpeciality = await specialityService.delete(id);
        res.status(StatusCodes.OK).json(deletedSpeciality);
    }
}

export const specialityController = new SpecialityController();
