import { models } from '../models/index.js';

class AcademicPlanRepository {
    async readAll() {
        return await models.AcademicPlan.findAll({
            as: 'academic_plan',
            attributes: ['id', 'recruitment_year', 'speciality_id'],
        });
    }

    async readById(id) {
        return await models.AcademicPlan.findOne({
            where: { id },
            as: 'academic_plan',
            attributes: ['id', 'recruitment_year', 'speciality_id'],
        });
    }

    async create(academicPlan) {
        return await models.AcademicPlan.create(academicPlan);
    }

    async update(academicPlan, id) {
        await models.AcademicPlan.update(academicPlan, { where: { id } });
    }

    async delete(id) {
        await models.AcademicPlan.destroy({ where: { id } });
    }
}

export const academicPlanRepository = new AcademicPlanRepository();
