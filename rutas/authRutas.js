const express = require ('express');
const router = express.Router();
const authControlador = require ('../Controllers/authControlador')

//router.get('/', authControlador.bienvenida);

router.post('/registro',authControlador.registroUsuario);
router.post('/inicio-sesion',authControlador.inicioSesion);
router.post('/cierre-sesion',authControlador.cierreSesion);
module.exports = router;
/*const express = require('express');
const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('../models');
const router = express.Router();


router.post('/registro', async ( req, res) => {
    const {username, password} = req.body;
    const hashed = await bcrypt.hash(password, 10);
    try{
         const usuarioCreado = await User.create({ username, password: hashed });
         res.status(201).send('usuario Creado');
    } catch(error){
        console.log(error);
        res.status(400).send('Error al crear usuario');
    }
})
router.post('/inicio-sesion', async (req, res) =>{
   passport.authenticate('local', (err, usuario, info) =>{
    if(err)
        return next(err);
    if(!usuario){
        return res.status(400).send(info.message);
    }
    req.logIn(usuario, (error) =>{
        if(error)
            return next(error);
        return res.send('Usuario autenticado');
    });
   })(req, res);
});
router.post('/cierre-sesion', async (req, res) =>{
    req.logOut((err) =>{
        if(err){
            return res.status(500).send('Error al cerrar sesion');
        }
        res.send('Sesion cerrada');
    })
})
module.exports = router;
*/