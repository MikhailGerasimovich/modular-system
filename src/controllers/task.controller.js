import { taskService } from '../services/task.service.js';
import { StatusCodes } from 'http-status-codes';

class TaskController {
    async readAll(req, res) {
        const tasks = await taskService.readAll();
        res.status(StatusCodes.OK).json(tasks);
    }

    async readById(req, res) {
        const { id } = req.params;
        const task = await taskService.readById(id);
        res.status(StatusCodes.OK).json(task);
    }

    async create(req, res) {
        const { topic, lecture_number, practical_number, laboratory_number, module_id } = req.body;
        const task = await taskService.create(
            topic,
            lecture_number,
            practical_number,
            laboratory_number,
            module_id,
        );
        res.status(StatusCodes.CREATED).json(task);
    }

    async update(req, res) {
        const { id } = req.params;
        const { topic, lecture_number, practical_number, laboratory_number, module_id } = req.body;
        const updatedTask = await taskService.update(
            topic,
            lecture_number,
            practical_number,
            laboratory_number,
            module_id,
            id,
        );
        res.status(StatusCodes.OK).json(updatedTask);
    }

    async delete(req, res) {
        const { id } = req.params;
        const deletedTask = await taskService.delete(id);
        res.status(StatusCodes.OK).json(deletedTask);
    }
}

export const taskController = new TaskController();
