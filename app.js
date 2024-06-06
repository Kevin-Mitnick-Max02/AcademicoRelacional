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
// Configuracion es de vista
app.set('view engine', 'ejs');
app.set('views', __dirname,'/views');
//-----configuraciones del cors
const corsOption ={
    origin : '*',
    methods : 'GET, POST, PUT, DELETE',
    allowedHeaders: 'Content-Type, Authorization',
    credentials : true
}
app.use(cors(corsOption)); // Cors con opciones confuguradas
// Middleware
app.use(express.json());

app.use(express.urlencoded({extended : false}));
// directorio publico
app.use(express.static('public'));
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
app.get('/', (req, res)=>{
    res.render('/index');
})
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