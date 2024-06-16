const express = require('express');
const session = require('express-session');
const cors = require('cors');
const passport = require('passport');
const { sequelize } = require('./models');  
const passportConfig = require('./config/passport');
const methodOverride = require('method-override');
const estudianteRutas = require ('./rutas/estudianteRutas');
const matriculaRutas = require ('./rutas/matriculaRutas');
const materiaRutas = require ('./rutas/materiaRutas');
const docenteRutas = require ('./rutas/docenteRutas');
const path = require('path');
const app = express();
// Configuracion es de vista
app.set('views', path.join(__dirname + '/views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
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

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.urlencoded({extended : false}));
// directorio publico
//app.use(express.static('public'));
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
    res.render('index');
})
app.use(methodOverride('_method'));
// Ruta para la página de editar estudiante
app.get('/editar/:ci_estudiante', (req, res) => {
    const ciEstudiante = req.params.ci_estudiante;
    // Aquí buscarías el estudiante por su CI en la base de datos o en el arreglo temporal
    const estudiante = sampleData.find(est => est.ci_estudiante === ciEstudiante);
    if (!estudiante) {
        res.status(404).send('Estudiante no encontrado');
        return;
    }
    res.render('editar', { estudiante });
});
// Ruta para guardar la edición del estudiante
app.post('/guardarEdicion/:ci_estudiante', (req, res) => {
    const ciEstudiante = req.params.ci_estudiante;
    const { nombres, apellidos, fecha_de_nacimiento, municipio, direccion, telefonos, email, carrera } = req.body;
    
    // Aquí actualizarías el estudiante en la base de datos o en el arreglo temporal
    const index = sampleData.findIndex(est => est.ci_estudiante === ciEstudiante);
    if (index !== -1) {
        sampleData[index] = {
            Ci_Estudiante: ciEstudiante,
            nombres: nombres,
            apellidos: apellidos,
            fecha_de_nacimiento: fecha_de_nacimiento,
            municipio: municipio,
            direccion: direccion,
            telefonos: telefonos,
            email: email,
            carrera: carrera
        };
        console.log(`Estudiante con CI ${ciEstudiante} actualizado`);
    } else {
        console.log(`Estudiante con CI ${ciEstudiante} no encontrado`);
    }

    // Redirigir de vuelta a la lista de estudiantes (página principal)
    res.redirect('/');
});


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