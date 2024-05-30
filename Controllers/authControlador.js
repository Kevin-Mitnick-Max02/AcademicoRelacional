const bcrypt = require('bcryptjs');
const passport = require('passport');
const { User } = require('../models');
exports.registroUsuario = async ( req, res) => {
    const {username, password} = req.body;
    const hashed = await bcrypt.hash(password, 10);
    try{
         const usuarioCreado = await User.create({ username, password: hashed });
         res.status(201).send('usuario Creado');
    } catch(error){
    console.log(error);
        res.status(400).send('Error al crear usuario');
    }
};
exports.inicioSesion = async (req, res, next) =>{
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
    })(req, res, next);
 };
 exports.cierreSesion = async (req, res) =>{
    req.logOut((err) =>{
        if(err){
            return res.status(500).send('Error al cerrar sesion');
        }
        res.send('Sesion cerrada');
    })
};