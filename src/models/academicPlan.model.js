import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db/connection.js';
import { DisciplineAcademicPlan } from './disciplineAcademicPlan.model.js';

export class AcademicPlan extends Model {}

AcademicPlan.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        recruitment_year: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'academic_plan',
        name: {
            singular: 'academic_plan',
            plural: 'academic_plans',
        },
    },
);

AcademicPlan.associate = (models) => {
    AcademicPlan.belongsTo(models.Speciality, {
        as: 'speciality',
        foreignKey: {
            name: 'speciality_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });

    AcademicPlan.hasMany(models.DisciplineAcademicPlan, {
        as: 'discipline_academic_plan',
        foreignKey: {
            name: 'academic_plan_id',
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        onUpdate: 'RESTRICT',
        onDelete: 'RESTRICT',
    });
};
