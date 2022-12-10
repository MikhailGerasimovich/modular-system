import { models } from '../models/index.js';

class TeacherRepository {
    async readAll() {
        return await models.Teacher.findAll({
            as: 'teacher',
            attributes: ['id', 'surname', 'name', 'patronymic', 'department_id'],
        });
    }

    async readById(id) {
        return await models.Teacher.findOne({
            where: { id },
            as: 'teacher',
            attributes: ['id', 'surname', 'name', 'patronymic', 'department_id'],
        });
    }

    async create(teacher) {
        return await models.Teacher.create(teacher);
    }

    async update(teacher, id) {
        await models.Teacher.update(teacher, { where: { id } });
    }

    async delete(id) {
        await models.Teacher.destroy({ where: { id } });
    }
}

export const teacherRepository = new TeacherRepository();
