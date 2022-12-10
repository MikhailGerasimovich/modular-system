import { models } from '../models/index.js';

class ModuleRepository {
    async readAll() {
        return await models.Module.findAll({
            as: 'module',
            attributes: [
                'id',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'discipline_academic_plan_id',
            ],
        });
    }

    async readById(id) {
        return await models.Module.findOne({
            where: { id },
            as: 'module',
            attributes: [
                'id',
                'lecture_number',
                'practical_number',
                'laboratory_number',
                'discipline_academic_plan_id',
            ],
        });
    }

    async create(module) {
        return await models.Module.create(module);
    }

    async update(module, id) {
        await models.Module.update(module, { where: { id } });
    }

    async delete(id) {
        await models.Module.destroy({ where: { id } });
    }
}

export const moduleRepository = new ModuleRepository();
