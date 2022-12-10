import { models } from '../models/index.js';

class DisciplineRepository {
    async readAll() {
        return await models.Discipline.findAll({
            as: 'discipline',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async readById(id) {
        return await models.Discipline.findOne({
            where: { id },
            as: 'discipline',
            attributes: ['id', 'title', 'short_title'],
        });
    }

    async create(discipline) {
        return await models.Discipline.create(discipline);
    }

    async update(discipline, id) {
        await models.Discipline.update(discipline, { where: { id } });
    }

    async delete(id) {
        await models.Discipline.destroy({ where: { id } });
    }
}

export const disciplineRepository = new DisciplineRepository();
