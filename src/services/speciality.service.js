import { specialityRepository } from '../repositories/speciality.repository.js';
import { NotFoundError } from '../errors/NotFoundError.js';
import { sequelize } from '../db/connection.js';

class SpecialityService {
    async readAll() {
        return await specialityRepository.readAll();
    }

    async readById(id) {
        return specialityRepository.readById(id);
    }

    async create(title, short_title) {
        const speciality = {
            title,
            short_title,
        };
        return await specialityRepository.create(speciality);
    }

    async update(title, short_title, id) {
        return await sequelize.transaction(async () => {
            const hasSpeciality = await specialityRepository.readById(id);
            if (!hasSpeciality) {
                throw new NotFoundError(`speciality with id=${id} not found`);
            }

            const speciality = {
                title,
                short_title,
            };

            await specialityRepository.update(speciality, id);
            return await specialityRepository.readById(id);
        });
    }

    async delete(id) {
        return await sequelize.transaction(async () => {
            const speciality = await specialityRepository.readById(id);
            if (!speciality) {
                throw new NotFoundError(`speciality with id=${id} not found`);
            }
            await specialityRepository.delete(id);
            return speciality;
        })
    }
}

export const specialityService = new SpecialityService();
