import { academicPlanService } from '../services/academicPlan.service.js';
import { StatusCodes } from 'http-status-codes';

class AcademicPlanController {
    async readAll(req, res) {
        const academicPlans = await academicPlanService.readAll();
        res.status(StatusCodes.OK).json(academicPlans);
    }

    async readById(req, res) {
        const { id } = req.params;
        const academicPlan = await academicPlanService.readById(id);
        res.status(StatusCodes.OK).json(academicPlan);
    }

    async create(req, res) {
        const { recruitment_year, speciality_id } = req.body;
        const academicPlan = await academicPlanService.create(recruitment_year, speciality_id);
        res.status(StatusCodes.CREATED).json(academicPlan);
    }

    async update(req, res) {
        const { id } = req.params;
        const { recruitment_year, speciality_id } = req.body;
        const updatedAcademicPlan = await academicPlanService.update(recruitment_year, speciality_id, id);
        res.status(StatusCodes.OK).json(updatedAcademicPlan);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedAcademicPlan = await academicPlanService.delete(id);
        res.status(StatusCodes.OK).json(deletedAcademicPlan);
    }
}

export const academicPlanController = new AcademicPlanController();
