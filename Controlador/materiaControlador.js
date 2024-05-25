// Llamando nuestro modelo
const materias = require('../modelos/materia');
const sequelize = require ('../config/database');
const { Op } = require('sequelize'); 
exports.getTodasLasMaterias= async (req, res) =>{
    try{
        const materia = await materias.findAll ();
        res.json(materia);
    }catch(error){
        console.log(error);
        res.status(500).send("Error del servidor");
    }
};
exports.getMateriaPorID = async (req, res) => {
    try {
       const { Id } =  peticion.params;
       const materia = await materias.findByPk(Id);
        if (materia) 
            res.json(materia);
        else
            res.status(404).send({mensaje: 'Materia No Encontrada'})
    } 
    catch (error) {
        res.status(500).send(error);
    }
};

exports.crearMateria = async (req, res) => {
    try {
        const nuevaMateria = await materias.create(req.body);
        res.status(201).json(nuevaMateria);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.actualizarMateria = async (req, res) => {
    try {
        const { Id } =  req.params;
        const [materiaActualizado] = await materias.update(req.body,{
            where : {ID_Materia: Id}
        });
        if (materiaActualizado){
            const materia = await materia.findByPk(Ci);
            res.json(materia);
        } else {
            res.status(404).json({mensaje: 'Materia no encontrada'})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.eliminarMateria = async (req, res) => {
    try {
        const { Id } =  req.params;
        const eliminado =  await materias.destroy({
            where : {ID_Materia: Id}
        });
        if (eliminado)
            res.status(200).json({mensaje: 'Materia eliminada'});
        else
            res.status(404).json({mensaje: 'Materia no encontrada'});
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.buscarMateria = async (req, res) => {
    try {
        const { nombres } = req.query;
        const materia = await materias.findAll({
            where : { Nombre_Materia : { [Op.like] : `%${nombres}%`} }
        });
        res .json(materia);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};