const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const { sequelize } = require('./models');  
const passportConfig = require('./config/passport');

const estudianteRutas = require ('./rutas/estudianteRutas');
const matriculaRutas = require ('./rutas/matriculaRutas');
const materiaRutas = require ('./rutas/materiaRutas');
const docenteRutas = require ('./rutas/docenteRutas');
const app = express();
//-----configuraciones del cors
const corsOption ={
    origin : 'http://ejemplo.com',
    methods : 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials : true
}
app.use(cors(corsOption)); // Cors con opciones confuguradas
// Middleware
app.use(express.json());

app.use(express.urlencoded());
app.use(session({
    secret:'clave_secreta',
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(session());
passportConfig(passport);
const authRutas = require('./rutas/authRutas');

// Rutas
app.use('/auth', authRutas);

app.use('/api/estudiante', estudianteRutas);
app.use('/api/matricula', matriculaRutas);
app.use('/api/docente', docenteRutas);
app.use('/api/materia', materiaRutas);
// Levantar el sevidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log('Servidor levantado en el puerto http://localhost: '+PORT);
});