const express = require ('express');
const router = express.Router();
const estudianteControlador = require('../Controllers/estudianteControlador');
router.get('/registroEstudiante',(req, res)=>{
    res.render('registro_estudiante');
});
router.get('/actualizarEstudiante',(req, res)=>{
    res.render('editar_estudiante');
});
router.get('/', estudianteControlador.getTodosLosEstudiantes);
router.get('/busqueda', estudianteControlador.buscarEstudiante);
router.get('/', estudianteControlador.getTodosLosEstudiantes);
router.get('/buscar/:Ci', estudianteControlador.getEstudiantePorCi);
router.post('/registro', estudianteControlador.crearEstudiante);
router.post('/actualizar/:Ci', estudianteControlador.actualizarEstudiante);
router.delete('/eliminar/:Ci', estudianteControlador.eliminarEstudiante);
module.exports = router;