import { departmentRepository } from '../repositories/department.repository.js';
import { sequelize } from '../db/connection.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class DepartmentService {
    async readAll() {
        return await departmentRepository.readAll();
    }

    async readById(id) {
        return departmentRepository.readById(id);
    }

    async create(title, short_title) {
        const department = {
            title,
            short_title,
        };
        return await departmentRepository.create(department);
    }

    async update(title, short_title, id) {
        return await sequelize.transaction(async () => {
            const hasDepartment = await departmentRepository.readById(id);
            if (!hasDepartment) {
                throw new NotFoundError(`department with id=${id} not found`);
            }
            const department = {
                title,
                short_title,
            };

            await departmentRepository.update(department, id);
            return await departmentRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const department = await departmentRepository.readById(id);
            if (!department) {
                throw new NotFoundError(`department with id=${id} not found`);
            }
            await departmentRepository.delete(id);
            return department;
        });
    }
}

export const departmentService = new DepartmentService();
