const express = require ('express');
const router = express.Router();
const docenteControlador = require('../Controlador/docenteControlador');

router.get('/', docenteControlador.getTodosLosDocentes);
router.get('/busqueda', docenteControlador.buscarDocente);
router.get('/', docenteControlador.getTodosLosDocentes);
router.get('/:Ci', docenteControlador.getDocentePorCi);
router.post('/', docenteControlador.crearDocente);
router.put('/:Ci', docenteControlador.actualizarDocente);
router.delete('/:Ci', docenteControlador.eliminarDocente);
module.exports = router;