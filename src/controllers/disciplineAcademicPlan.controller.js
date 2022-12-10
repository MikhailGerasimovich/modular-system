import { disciplineAcademicPlanService } from '../services/disciplineAcademicPlan.service.js';
import { StatusCodes } from 'http-status-codes';

class DisciplineAcademicPlanController {
    async readAll(req, res) {
        const disciplineAcademicPlans = await disciplineAcademicPlanService.readAll();
        res.status(StatusCodes.OK).json(disciplineAcademicPlans);
    }

    async readById(req, res) {
        const { id } = req.params;
        const disciplineAcademicPlan = await disciplineAcademicPlanService.readById(id);
        res.status(StatusCodes.OK).json(disciplineAcademicPlan);
    }

    async create(req, res) {
        const {
            lecture_number,
            practical_number,
            laboratory_number,
            control_type,
            department_id,
            academic_plan_id,
            discipline_id,
        } = req.body;
        const disciplineAcademicPlan = await disciplineAcademicPlanService.create(
            lecture_number,
            practical_number,
            laboratory_number,
            control_type,
            department_id,
            academic_plan_id,
            discipline_id,
        );
        res.status(StatusCodes.CREATED).json(disciplineAcademicPlan);
    }

    async update(req, res) {
        const { id } = req.params;
        const {
            lecture_number,
            practical_number,
            laboratory_number,
            control_type,
            department_id,
            academic_plan_id,
            discipline_id,
        } = req.body;
        const updatedDisciplineAcademicPlan = await disciplineAcademicPlanService.update(
            lecture_number,
            practical_number,
            laboratory_number,
            control_type,
            department_id,
            academic_plan_id,
            discipline_id,
            id,
        );
        res.status(StatusCodes.OK).json(updatedDisciplineAcademicPlan);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedDisciplineAcademicPlan = await disciplineAcademicPlanService.delete(id);
        res.status(StatusCodes.OK).json(deletedDisciplineAcademicPlan);
    }
}

export const disciplineAcademicPlanController = new DisciplineAcademicPlanController();
