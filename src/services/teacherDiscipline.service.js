import { teacherDisciplineRepository } from '../repositories/teacherDiscipline.repository.js';
import { sequelize } from '../db/connection.js';
import { teacherRepository } from '../repositories/teacher.repository.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class TeacherDisciplineService {
    async readAll() {
        return await teacherDisciplineRepository.readAll();
    }

    async readById(id) {
        return teacherDisciplineRepository.readById(id);
    }

    async create(class_type, teacher_discipline_id, discipline_academic_plan_id) {
        const teacherDiscipline = {
            class_type,
            teacher_discipline_id,
            discipline_academic_plan_id,
        };
        return await teacherDisciplineRepository.create(teacherDiscipline);
    }

    async update(class_type, teacher_discipline_id, discipline_academic_plan_id, id) {
        return await sequelize.transaction(async () => {
            const hasTeacherDiscipline = await teacherDisciplineRepository.readById(id);
            if (!hasTeacherDiscipline) {
                throw new NotFoundError(`teacher discipline with id=${id} not found`);
            }

            const teacherDiscipline = {
                class_type,
                teacher_discipline_id,
                discipline_academic_plan_id,
            };

            await teacherDisciplineRepository.update(teacherDiscipline, id);
            return await teacherDisciplineRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const teacherDiscipline = await teacherDisciplineRepository.readById(id);
            if (!teacherDiscipline) {
                throw new NotFoundError(`teacher discipline with id=${id} not found`);
            }

            await teacherDisciplineRepository.delete(id);
            return teacherDiscipline;
        });
    }
}

export const teacherDisciplineService = new TeacherDisciplineService();
