const express = require('express');
const estudianteRutas = require ('./rutas/estudianteRutas');
const matriculaRutas = require ('./rutas/matriculaRutas');
const app = express();
// Middleware
app.use(express.json());
// Rutas
app.use('/api/estudiante', estudianteRutas);
app.use('/api/matricula', matriculaRutas);
// Levantar el sevidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto http://localhost: '+PORT);
});