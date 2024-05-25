const express = require ('express');
const router = express.Router();
const materiaControlador = require('../Controlador/materiaControlador');

router.get('/', materiaControlador.getTodasLasMaterias);
router.get('/busqueda', materiaControlador.buscarMateria);
router.get('/:ID', materiaControlador.getMateriaPorID);
router.post('/', materiaControlador.crearMateria);
router.put('/:ID', materiaControlador.actualizarMateria);
router.delete('/:ID', materiaControlador.eliminarMateria);
module.exports = router; 