// Llamando nuestro modelo
const estudiante = require('../modelos/estudiante');
const { Op } = require('sequelize'); 
exports.getTodosLosEstudiantes = async (req, res) =>{
    try{
        const estudiantes = await estudiante.findAll ();
        res.json(estudiantes);
    }catch(error){
        console.log(error);
        res.status(500).send("Error del servidor");
    }
};


exports.getEstudiantePorCi = async (req, res) => {
    try {
       const { Ci } =  peticion.params;
       const estudiantes = await estudiante.findByPk(Ci);
        if (estudiantes) 
            res.json(estudiantes);
        else
            res.status(404).send({mensaje: 'Estudiante No Encontrado'})
    } 
    catch (error) {
        res.status(500).send(error);
    }
};

exports.crearEstudiante = async (req, res) => {
    try {
        const nuevoEstudiante = await estudiante.create(req.body);
        res.status(201).json(nuevoEstudiante);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.actualizarEstudiante = async (req, res) => {
    try {
        const { Ci } =  req.params;
        const [estudianteActualizado] = await estudiante.update(req.body,{
            where : {Ci_Estudiante: Ci}
        });
        if (estudianteActualizado){
            const estudiantes = await estudiante.findByPk(Ci);
            res.json(estudiantes);
        } else {
            res.status(404).json({mensaje: 'Estudiante no encontrado'})
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.eliminarEstudiante = async (req, res) => {
    try {
        const { Ci } =  req.params;
        const eliminado =  await estudiante.destroy({
            where : {Ci_Estudiante : Ci}
        });
        if (eliminado)
            res.status(200).json({mensaje: 'Estudiante eliminado'});
        else
            res.status(404).json({mensaje: 'Estudiante no encontrado'});
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.buscarEstudiante = async (req, res) => {
    try {
        const { nombres } = req.query;
        const estudiantes = await estudiante.findAll({
            where : { nombres : { [Op.like] : `%${nombres}%`} }
        });
        res .json(estudiantes);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};