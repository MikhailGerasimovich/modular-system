import { models } from '../models/index.js';
import { NotFoundError } from '../errors/NotFoundError.js';

class SpecialityRepository {
    async readAll() {
        return await models.Speciality.findAll({
            as: 'speciality',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async readById(id) {
        return await models.Speciality.findOne({
            where: { id },
            as: 'speciality',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async create(speciality) {
        return await models.Speciality.create(speciality);
    }

    async update(speciality, id) {
        await models.Speciality.update(speciality, { where: { id } });
    }

    async delete(id) {
        await models.Speciality.destroy({ where: { id } });
    }
}

export const specialityRepository = new SpecialityRepository();
