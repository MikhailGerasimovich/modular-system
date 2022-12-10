import { models } from '../models/index.js';

class TaskRepository {
    async readAll() {
        return await models.Task.findAll({
            as: 'task',
            attributes: [
                'id',
                'topic',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'module_id',
            ],
        });
    }

    async readById(id) {
        return await models.Task.findOne({
            where: { id },
            as: 'task',
            attributes: [
                'id',
                'topic',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'module_id',
            ],
        });
    }

    async create(task) {
        return await models.Task.create(task);
    }

    async update(task, id) {
        await models.Task.update(task, { where: { id } });
    }

    async delete(id) {
        await models.Task.destroy({ where: { id } });
    }
}

export const taskRepository = new TaskRepository();
