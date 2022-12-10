import { Sequelize } from 'sequelize';
import { sequelize } from '../db/connection.js';
import { Teacher } from './teacher.model.js';
import { Department } from './department.model.js';
import { Speciality } from './speciality.model.js';
import { AcademicPlan } from './academicPlan.model.js';
import { TeacherDiscipline } from './teacherDiscipline.model.js';
import { DisciplineAcademicPlan } from './disciplineAcademicPlan.model.js';
import { Discipline } from './discipline.model.js';
import { Module } from './module.model.js';
import { Task } from './task.model.js';

export const models = {
    Sequelize,
    sequelize,
    Teacher,
    Department,
    Speciality,
    AcademicPlan,
    TeacherDiscipline,
    DisciplineAcademicPlan,
    Discipline,
    Module,
    Task,
};

Teacher.associate(models);
Department.associate(models);
Speciality.associate(models);
AcademicPlan.associate(models);
TeacherDiscipline.associate(models);
DisciplineAcademicPlan.associate(models);
Discipline.associate(models);
Module.associate(models);
Task.associate(models);
