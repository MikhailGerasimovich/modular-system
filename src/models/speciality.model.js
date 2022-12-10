import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Speciality extends Model {}

Speciality.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        short_title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        modelName: 'speciality',
        name: {
            singular: 'speciality',
            plural: 'specialities',
        },
    },
);

Speciality.associate = (models) => {
    Speciality.hasMany(models.AcademicPlan, {
        as: 'academic_plan',
        foreignKey: {
            name: 'speciality_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });
};
