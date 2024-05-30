const express = require ('express');
const router = express.Router();
const materiaControlador = require('../Controllers/materiaControlador');

router.get('/', materiaControlador.getTodasLasMaterias);
router.get('/busqueda', materiaControlador.buscarMateria);
router.get('/:id', materiaControlador.getMateriaPorID);
router.post('/', materiaControlador.crearMateria);
router.put('/:id', materiaControlador.actualizarMateria);
router.delete('/:id', materiaControlador.eliminarMateria);
module.exports = router; 