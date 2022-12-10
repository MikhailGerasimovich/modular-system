import { taskRepository } from '../repositories/task.repository.js';
import { sequelize } from '../db/connection.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class TaskService {
    async readAll() {
        return await taskRepository.readAll();
    }

    async readById(id) {
        return taskRepository.readById(id);
    }

    async create(topic, lecture_number, practical_number, laboratory_number, module_id) {
        const task = {
            topic,
            lecture_number,
            practical_number,
            laboratory_number,
            module_id,
        };
        return await taskRepository.create(task);
    }

    async update(topic, lecture_number, practical_number, laboratory_number, module_id, id) {
        return await sequelize.transaction(async () => {
            const hasTask = await taskRepository.readById(id);
            if (!hasTask) {
                throw new NotFoundError(`task with id=${id} not found`);
            }

            const task = {
                topic,
                lecture_number,
                practical_number,
                laboratory_number,
                module_id,
            };
            await taskRepository.update(task, id);
            return taskRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const task = await taskRepository.readById(id);
            if (!task) {
                throw new NotFoundError(`task with id=${id} not found`);
            }
            await taskRepository.delete(id);
            return task;
        });
    }
}

export const taskService = new TaskService();
