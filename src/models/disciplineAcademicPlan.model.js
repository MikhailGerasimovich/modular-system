import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class DisciplineAcademicPlan extends Model {}

DisciplineAcademicPlan.init(
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
        control_type: {
            type: DataTypes.ENUM,
            values: ['offset', 'exam', 'diff_offset'], //зачет, экзамен
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'discipline_academic_plan',
        name: {
            singular: 'discipline_academic_plan',
            plural: 'discipline_academic_plans',
        },
    },
);

DisciplineAcademicPlan.associate = (models) => {
    DisciplineAcademicPlan.hasMany(models.TeacherDiscipline, {
        as: 'teacher_discipline',
        foreignKey: {
            name: 'discipline_academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });

    DisciplineAcademicPlan.hasMany(models.Module, {
        as: 'module',
        foreignKey: {
            name: 'discipline_academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });

    DisciplineAcademicPlan.belongsTo(models.Discipline, {
        as: 'discipline',
        foreignKey: {
            name: 'discipline_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    DisciplineAcademicPlan.belongsTo(models.Department, {
        as: 'department',
        foreignKey: {
            name: 'department_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    DisciplineAcademicPlan.belongsTo(models.AcademicPlan, {
        as: 'academic_plan',
        foreignKey: {
            name: 'academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
