import { departmentService } from '../services/department.service.js';
import { StatusCodes } from 'http-status-codes';

class DepartmentController {
    async readAll(req, res) {
        const departments = await departmentService.readAll();
        res.status(StatusCodes.OK).json(departments);
    }

    async readById(req, res) {
        const { id } = req.params;
        const department = await departmentService.readById(id);
        res.status(StatusCodes.OK).json(department);
    }

    async create(req, res) {
        const { title, short_title } = req.body;
        const department = await departmentService.create(title, short_title);
        res.status(StatusCodes.CREATED).json(department);
    }

    async update(req, res) {
        const { id } = req.params;
        const { title, short_title } = req.body;
        const updatedDepartment = await departmentService.update(title, short_title, id);
        res.status(StatusCodes.OK).json(updatedDepartment);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedDepartment = await departmentService.delete(id);
        res.status(StatusCodes.OK).json(deletedDepartment);
    }
}

export const departmentController = new DepartmentController();
