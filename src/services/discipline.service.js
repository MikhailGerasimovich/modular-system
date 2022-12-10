import { disciplineRepository } from '../repositories/discipline.repository.js';
import { sequelize } from '../db/connection.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class DisciplineService {
    async readAll() {
        return await disciplineRepository.readAll();
    }

    async readById(id) {
        return disciplineRepository.readById(id);
    }

    async create(title, short_title) {
        const discipline = {
            title,
            short_title,
        };
        return await disciplineRepository.create(discipline);
    }

    async update(title, short_title, id) {
        return await sequelize.transaction(async () => {
            const hasDiscipline = await disciplineRepository.readById(id);
            if (!hasDiscipline) {
                throw new NotFoundError(`discipline with id=${id} not found`);
            }

            const discipline = {
                title,
                short_title,
            };

            await disciplineRepository.update(discipline, id);
            return disciplineRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const discipline = await disciplineRepository.readById(id);
            if (!discipline) {
                throw new NotFoundError(`discipline with id=${id} not found`);
            }
            await disciplineRepository.delete(id);
            return discipline;
        });
    }
}

export const disciplineService = new DisciplineService();
