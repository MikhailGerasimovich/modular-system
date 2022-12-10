import { disciplineAcademicPlanRepository } from '../repositories/disciplineAcademicPlan.repository.js';
import { sequelize } from '../db/connection.js';
import { teacherDisciplineRepository } from '../repositories/teacherDiscipline.repository.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class DisciplineAcademicPlanService {
    async readAll() {
        return await disciplineAcademicPlanRepository.readAll();
    }

    async readById(id) {
        return disciplineAcademicPlanRepository.readById(id);
    }

    async create(
        lecture_number,
        practical_number,
        laboratory_number,
        control_type,
        department_id,
        academic_plan_id,
        discipline_id,
    ) {
        const disciplineAcademicPlan = {
            lecture_number,
            practical_number,
            laboratory_number,
            control_type,
            department_id,
            academic_plan_id,
            discipline_id,
        };
        return await disciplineAcademicPlanRepository.create(disciplineAcademicPlan);
    }

    async update(
        lecture_number,
        practical_number,
        laboratory_number,
        control_type,
        department_id,
        academic_plan_id,
        discipline_id,
        id,
    ) {
        return await sequelize.transaction(async () => {
            const hasDisciplineAcademicPlan = await disciplineAcademicPlanRepository.readById(id);
            if (!hasDisciplineAcademicPlan) {
                throw new NotFoundError(`discipline academic plan with id=${id} not found`);
            }

            const disciplineAcademicPlan = {
                lecture_number,
                practical_number,
                laboratory_number,
                control_type,
                department_id,
                academic_plan_id,
                discipline_id,
            };

            await disciplineAcademicPlanRepository.update(disciplineAcademicPlan, id);
            return await disciplineAcademicPlanRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const disciplineAcademicPlan = await disciplineAcademicPlanRepository.readById(id);
            if (!disciplineAcademicPlan) {
                throw new NotFoundError(`discipline academic plan with id=${id} not found`);
            }

            await disciplineAcademicPlanRepository.delete(id);
            return disciplineAcademicPlan;
        });
    }
}

export const disciplineAcademicPlanService = new DisciplineAcademicPlanService();
