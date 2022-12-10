import { models } from '../models/index.js';

class TeacherDisciplineRepository {
    async readAll() {
        return await models.TeacherDiscipline.findAll({
            as: 'teacher_discipline',
            attributes: [
                'id',
                'class_type',
                'teacher_discipline_id',
                'discipline_academic_plan_id',
            ],
        });
    }

    async readById(id) {
        return await models.TeacherDiscipline.findOne({
            where: { id },
            as: 'teacher_discipline',
            attributes: [
                'id',
                'class_type',
                'teacher_discipline_id',
                'discipline_academic_plan_id',
            ],
        });
    }

    async create(teacherDiscipline) {
        return await models.TeacherDiscipline.create(teacherDiscipline);
    }

    async update(teacherDiscipline, id) {
        await models.TeacherDiscipline.update(teacherDiscipline, { where: { id } });
    }

    async delete(id) {
        await models.TeacherDiscipline.destroy({ where: { id } });
    }
}

export const teacherDisciplineRepository = new TeacherDisciplineRepository();
