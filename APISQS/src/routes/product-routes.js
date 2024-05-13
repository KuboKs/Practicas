import {Router} from 'express';
import { getAlumnos, getAlumno, createAlumno } from '../controllers/products.controllers.js';

const router= Router()
router.get('/alumnos', getAlumnos);
router.get('/alumnos/:id', getAlumno);
router.post('/alumnos', createAlumno);

export default router