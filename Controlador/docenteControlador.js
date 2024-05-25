// Llamando nuestro modelo
const docente = require('../modelos/docente');
const sequelize = require ('../config/database');
const { Op } = require('sequelize'); 
exports.getTodosLosDocentes= async (req, res) =>{
    try{
        const docentes = await docente.findAll ();
        res.json(docentes);
    }catch(error){
        res.status(500).send(error);
        
    }
};
exports.getDocentePorCi = async (req, res) => {
    try {
       const { Ci } =  req.params;
       const docentes = await docente.findByPk(Ci);
        if (docentes) 
            res.json(docentes);
        else
            res.status(404).send({mensaje: 'Docente No Encontrado'})
    } 
    catch (error) {
        res.status(500).send(error);
    }
};

exports.crearDocente = async (req, res) => {
    try {
        const nuevoDocente = await docente.create(req.body);
        res.status(201).json(nuevoDocente);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.actualizarDocente = async (req, res) => {
    try {
        const { Ci } =  req.params;
        const [docenteActualizado] = await docente.update(req.body,{
            where : {Ci_Docente: Ci}
        });
        if (docenteActualizado){
            const docentes = await docente.findByPk(Ci);
            res.json(docentes);
        } else {
            res.status(404).json({mensaje: 'Docente no encontrado'})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.eliminarDocente = async (req, res) => {
    try {
        const { Ci } =  req.params;
        const eliminado =  await docentes.destroy({
            where : {Ci_Docente : Ci}
        });
        if (eliminado)
            res.status(200).json({mensaje: 'Docente eliminado'});
        else
            res.status(404).json({mensaje: 'Docente no encontrado'});
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.buscarDocente = async (req, res) => {
    try {
        const { nombres } = req.query;
        const docente = await docentes.findAll({
            where : { nombres : { [Op.like] : `%${nombres}%`} }
        });
        res .json(docente);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};