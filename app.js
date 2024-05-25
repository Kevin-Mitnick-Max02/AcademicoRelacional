const express = require('express');
const estudianteRutas = require ('./rutas/estudianteRutas');
const matriculaRutas = require ('./rutas/matriculaRutas');
const materiaRutas = require ('./rutas/materiaRutas');
const docenteRutas = require ('./rutas/docenteRutas');
const app = express();
// Middleware
app.use(express.json());
// Rutas
app.use('/api/estudiante', estudianteRutas);
app.use('/api/matricula', matriculaRutas);
app.use('/api/docente', docenteRutas);
app.use('/api/materia', materiaRutas);
// Levantar el sevidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto http://localhost: '+PORT);
});