import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Department extends Model {}

Department.init(
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
        modelName: 'department',
        name: {
            singular: 'department',
            plural: 'departments',
        },
    },
);

Department.associate = (models) => {
    Department.hasMany(models.Teacher, {
        as: 'teacher',
        foreignKey: {
            name: 'department_id',
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });

    Department.hasMany(models.DisciplineAcademicPlan, {
        as: 'discipline_academic_plan',
        foreignKey: {
            name: 'department_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });
};
