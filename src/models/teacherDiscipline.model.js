import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';

export class TeacherDiscipline extends Model {}

TeacherDiscipline.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        class_type: {
            type: DataTypes.ENUM,
            values: ['lecture', 'practice', 'laboratory'],
            allowNull: false,
            validate: {
                notEmpty: true,
            },
        },
    },
    {
        sequelize,
        modelName: 'teacher_discipline',
        name: {
            singular: 'teacher_discipline',
            plural: 'teacher_disciplines',
        },
    },
);

TeacherDiscipline.associate = (models) => {
    TeacherDiscipline.belongsTo(models.Teacher, {
        as: 'teacher',
        foreignKey: {
            name: 'teacher_discipline_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    TeacherDiscipline.belongsTo(models.DisciplineAcademicPlan, {
        as: 'discipline_academic_plan',
        foreignKey: {
            name: 'discipline_academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};
