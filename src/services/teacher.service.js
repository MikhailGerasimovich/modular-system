import { teacherRepository } from '../repositories/teacher.repository.js';
import { NotFoundError } from '../errors/NotFoundError.js';
import { sequelize } from '../db/connection.js';

class TeacherService {
    async readAll() {
        return await teacherRepository.readAll();
    }

    async readById(id) {
        return await teacherRepository.readById(id);
    }

    async create(surname, name, patronymic, department_id) {
        const teacher = {
            surname,
            name,
            patronymic,
            department_id,
        };
        return await teacherRepository.create(teacher);
    }

    async update(surname, name, patronymic, department_id, id) {
        return await sequelize.transaction(async () => {
            const hasTeacher = await teacherRepository.readById(id);
            if (!hasTeacher) {
                throw new NotFoundError(`teacher with id=${id} not found`);
            }

            const teacher = {
                surname,
                name,
                patronymic,
                department_id,
            };

            await teacherRepository.update(teacher, id);
            return await teacherRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const teacher = await teacherRepository.readById(id);
            if (!teacher) {
                throw new NotFoundError(`teacher with id=${id} not found`);
            }

            await teacherRepository.delete(id);
            return teacher;
        });
    }
}

export const teacherService = new TeacherService();
