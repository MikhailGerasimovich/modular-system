import { models } from '../models/index.js';

class DisciplineAcademicPlanRepository {
    async readAll() {
        return await models.DisciplineAcademicPlan.findAll({
            as: 'module',
            attributes: [
                'id',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'control_type',
                'department_id',
                'academic_plan_id',
                'discipline_id',
            ],
        });
    }

    async readById(id) {
        return await models.DisciplineAcademicPlan.findOne({
            where: { id },
            as: 'module',
            attributes: [
                'id',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'control_type',
                'department_id',
                'academic_plan_id',
                'discipline_id',
            ],
        });
    }

    async create(disciplineAcademicPlan) {
        return await models.DisciplineAcademicPlan.create(disciplineAcademicPlan);
    }

    async update(disciplineAcademicPlan, id) {
        await models.DisciplineAcademicPlan.update(disciplineAcademicPlan, { where: { id } });
    }

    async delete(id) {
        await models.DisciplineAcademicPlan.destroy({ where: { id } });
    }
}

export const disciplineAcademicPlanRepository = new DisciplineAcademicPlanRepository();
