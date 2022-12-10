import { academicPlanRepository } from '../repositories/academicPlan.repository.js';
import { sequelize } from '../db/connection.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class AcademicPlanService {
    async readAll() {
        return await academicPlanRepository.readAll();
    }

    async readById(id) {
        return await academicPlanRepository.readById(id);
    }

    async create(recruitment_year, speciality_id) {
        const academicPlan = {
            recruitment_year,
            speciality_id,
        };

        return await academicPlanRepository.create(academicPlan);
    }

    async update(recruitment_year, speciality_id, id) {
        return await sequelize.transaction(async () => {
            const hasAcademicPlan = await academicPlanRepository.readById(id);
            if (!hasAcademicPlan) {
                throw new NotFoundError(`academic plan with id=${id} not found`);
            }
            const academicPlan = {
                recruitment_year,
                speciality_id,
            };
            await academicPlanRepository.update(academicPlan, id);
            return await academicPlanRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const academicPlan = await academicPlanRepository.readById(id);
            if (!academicPlan) {
                throw new NotFoundError(`academic plan with id=${id} not found`);
            }
            await academicPlanRepository.delete(id);
            return academicPlan;
        });
    }
}

export const academicPlanService = new AcademicPlanService();
