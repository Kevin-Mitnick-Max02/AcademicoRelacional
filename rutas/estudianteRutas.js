const express = require ('express');
const router = express.Router();
const estudianteControlador = require('../Controlador/estudianteControlador');

router.get('/', estudianteControlador.getTodosLosEstudiantes);
router.get('/busqueda', estudianteControlador.buscarEstudiante);
router.get('/', estudianteControlador.getTodosLosEstudiantes);
router.get('/:Ci', estudianteControlador.getEstudiantePorCi);
router.post('/', estudianteControlador.crearEstudiante);
router.put('/:Ci', estudianteControlador.actualizarEstudiante);
router.delete('/:Ci', estudianteControlador.eliminarEstudiante);
module.exports = router;