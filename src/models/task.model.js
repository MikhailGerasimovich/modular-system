import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Task extends Model {}

Task.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        topic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
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
        modelName: 'task',
        name: {
            singular: 'task',
            plural: 'tasks',
        },
    },
);

Task.associate = (models) => {
    Task.belongsTo(models.Module, {
        as: 'module',
        foreignKey: {
            name: 'module_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
