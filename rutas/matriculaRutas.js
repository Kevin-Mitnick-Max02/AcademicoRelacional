const express = require('express');
const router = express.Router();
const matriculaControlador = require('../Controllers/matriculaControlador');
router.get('/', matriculaControlador.getTodasLasMatriculas);
// CONSULTAS - REPORTES
// BUSCAR MATRICULAS DE UN ESTUDIANTE : NUMEROS
router.get('/estudiante/:nombreEstudiante', matriculaControlador.getMatriculaPorEstudiante);
// contar Matriculas por cada Estudiante
router.get('/contar', matriculaControlador.contarMatriculaPorEstudiante);

module.exports = router;