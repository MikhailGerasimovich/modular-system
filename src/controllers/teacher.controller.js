import { teacherService } from '../services/teacher.service.js';
import { StatusCodes } from 'http-status-codes';

class TeacherController {
    async readAll(req, res) {
        const teachers = await teacherService.readAll();
        res.status(StatusCodes.OK).json(teachers);
    }

    async readById(req, res) {
        const { id } = req.params;
        const teacher = await teacherService.readById(id);
        res.status(StatusCodes.OK).json(teacher);
    }

    async create(req, res) {
        const { surname, name, patronymic, department_id } = req.body;
        const teacher = await teacherService.create(surname, name, patronymic, department_id);
        res.status(StatusCodes.CREATED).json(teacher);
    }

    async update(req, res) {
        const { id } = req.params;
        const { surname, name, patronymic, department_id } = req.body;
        const updatedTeacher = await teacherService.update(surname, name, patronymic, department_id, id);
        res.status(StatusCodes.OK).json(updatedTeacher);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedTeacher = await teacherService.delete(id);
        res.status(StatusCodes.OK).json(deletedTeacher);
    }
}

export const teacherController = new TeacherController();
