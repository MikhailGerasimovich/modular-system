import { models } from '../models/index.js';

class DepartmentRepository {
    async readAll() {
        return await models.Department.findAll({
            as: 'department',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async readById(id) {
        return await models.Department.findOne({
            where: { id },
            as: 'department',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async create(department) {
        return await models.Department.create(department);
    }

    async update(department, id) {
        await models.Department.update(department, { where: { id } });
    }

    async delete(id) {
        await models.Department.destroy({ where: { id } });
    }
}

export const departmentRepository = new DepartmentRepository();
