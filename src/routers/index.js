import express from 'express';
import { teacherRouter } from './teacher.router.js';
import { specialityRouter } from './speciality.router.js';
import { disciplineRouter } from './discipline.router.js';
import { taskRouter } from './task.router.js';
import { moduleRouter } from './modul.router.js';
import { departmentRouter } from './department.router.js';
import { academicPlanRouter } from './academicPlan.router.js';
import { teacherDisciplineRouter } from './teacherDiscipline.router.js';
import { disciplineAcademicPlanRouter } from './disciplineAcademicPlan.router.js';

export const router = express.Router();

router.use('/teacher', teacherRouter);
router.use('/speciality', specialityRouter);
router.use('/discipline', disciplineRouter);
router.use('/task', taskRouter);
router.use('/module', moduleRouter);
router.use('/department', departmentRouter);
router.use('/academic-plan', academicPlanRouter);
router.use('/teacher-discipline', teacherDisciplineRouter);
router.use('/discipline-academic-plan', disciplineAcademicPlanRouter);
