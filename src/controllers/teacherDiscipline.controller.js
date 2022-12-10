import { teacherDisciplineService } from '../services/teacherDiscipline.service.js';
import { StatusCodes } from 'http-status-codes';

class TeacherDisciplineController {
    async readAll(req, res) {
        const teacherDisciplines = await teacherDisciplineService.readAll();
        res.status(StatusCodes.OK).json(teacherDisciplines);
    }

    async readById(req, res) {
        const { id } = req.params;
        const teacherDiscipline = await teacherDisciplineService.readById(id);
        res.status(StatusCodes.OK).json(teacherDiscipline);
    }

    async create(req, res) {
        const { class_type, teacher_discipline_id, discipline_academic_plan_id } = req.body;
        const teacherDiscipline = await teacherDisciplineService.create(
            class_type,
            teacher_discipline_id,
            discipline_academic_plan_id,
        );
        res.status(StatusCodes.CREATED).json(teacherDiscipline);
    }

    async update(req, res) {
        const { id } = req.params;
        const { class_type, teacher_discipline_id, discipline_academic_plan_id } = req.body;
        const updatedTeacherDiscipline = await teacherDisciplineService.update(
            class_type,
            teacher_discipline_id,
            discipline_academic_plan_id,
            id,
        );
        res.status(StatusCodes.OK).json(updatedTeacherDiscipline);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedTeacherDiscipline = await teacherDisciplineService.delete(id);
        res.status(StatusCodes.OK).json(deletedTeacherDiscipline);
    }
}

export const teacherDisciplineController = new TeacherDisciplineController();
