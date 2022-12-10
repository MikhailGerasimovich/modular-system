import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class Teacher extends Model {}

Teacher.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        surname: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
        patronymic: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        modelName: 'teachers',
        name: {
            singular: 'teacher',
            plural: 'teachers',
        },
    },
);

Teacher.associate = (models) => {
    Teacher.belongsTo(models.Department, {
        as: 'department',
        foreignKey: {
            name: 'department_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    Teacher.hasMany(models.TeacherDiscipline, {
        as: 'teacher_discipline',
        foreignKey: {
            name: 'teacher_discipline_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'CASCADE',
    });
};
