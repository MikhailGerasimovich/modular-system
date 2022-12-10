import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Module extends Model {}

Module.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        lecture_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        practical_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        laboratory_number: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'module',
        name: {
            singular: 'module',
            plural: 'modules',
        },
    },
);

Module.associate = (models) => {
    Module.hasMany(models.Task, {
        as: 'task',
        foreignKey: {
            name: 'module_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });

    Module.belongsTo(models.DisciplineAcademicPlan, {
        as: 'discipline_academic_plan',
        foreignKey: {
            name: 'discipline_academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
