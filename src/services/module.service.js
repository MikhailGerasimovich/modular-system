import { moduleRepository } from '../repositories/module.repository.js';
import { sequelize } from '../db/connection.js';
import { NotFoundError } from '../errors/NotFoundError.js';
import { models } from '../models/index.js';

class ModuleService {
    async readAll() {
        return await moduleRepository.readAll();
    }

    async readById(id) {
        return moduleRepository.readById(id);
    }

    async create(lecture_number, practical_number, laboratory_number, discipline_academic_plan_id) {
        const module = {
            lecture_number,
            practical_number,
            laboratory_number,
            discipline_academic_plan_id,
        };
        return await moduleRepository.create(module);
    }

    async update(
        lecture_number,
        practical_number,
        laboratory_number,
        discipline_academic_plan_id,
        id,
    ) {
        return await sequelize.transaction(async () => {
            const hasModule = await moduleRepository.readById(id);
            if (!hasModule) {
                throw new NotFoundError(`module with id=${id} not found`);
            }

            const module = {
                lecture_number,
                practical_number,
                laboratory_number,
                discipline_academic_plan_id,
            };
            await moduleRepository.update(module, id);
            return await moduleRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const module = await moduleRepository.readById(id);
            if (!module) {
                throw new NotFoundError(`module with id=${id} not found`);
            }
            await moduleRepository.delete(id);
            return module;
        });
    }
}

export const moduleService = new ModuleService();
