import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Discipline extends Model {}

Discipline.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        short_title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'discipline',
        name: {
            singular: 'discipline',
            plural: 'disciplines',
        },
    },
);

Discipline.associate = (models) => {
    Discipline.hasMany(models.DisciplineAcademicPlan, {
        as: 'discipline',
        foreignKey: {
            name: 'discipline_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });
};
