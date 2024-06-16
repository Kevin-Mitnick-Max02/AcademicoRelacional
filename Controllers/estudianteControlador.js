// Llamando nuestro modelo
const estudiante = require('../modelos/estudiante');
const { Op } = require('sequelize'); 
exports.getTodosLosEstudiantes = async (req, res) =>{
   // res.render('estudiante');
    
    try{
        const estudiantes = await estudiante.findAll ();
        res.render('estudiante', {estudiantes : estudiantes});
    }catch(error){
        console.log(error);
        res.status(500).send("Error del servidor");
    }
        
};
exports.getEstudiantePorCi = async (req, res) => {
    try {
       const { Ci } =  req.params;
       console.log(Ci);
       const estudiantes = await estudiante.findByPk(Ci);
        if (estudiantes) 
            //res.json(estudiantes);
            res.render('editar_estudiante', {estudiantes : estudiantes})
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
        console.log("Registro exitoso",nuevoEstudiante);
        res.render('registro_estudiante');
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
        if (!estudianteActualizado){
            res.status(404).json({mensaje: 'Estudiante no encontrado'})
        } else {
            const estudiantes = await estudiante.findByPk(Ci);
            console.log("Estudiante editado", estudiantes);
            res.redirect('/');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.eliminarEstudiante = async (req, res) => {
    
    /*const ciEstudiante = req.params.Ci_Estudiante;
    try {
        await estudiante.destroy({
            where: { Ci_Estudiante: ciEstudiante }
        });
        console.log(`Estudiante con CI ${ciEstudiante} eliminado`);
        res.redirect('/');
    } catch (error) {
        console.error('Error al eliminar estudiante:', error);
        res.status(500).send('Error interno del servidor');
    }
    */
    try {
        const { Ci } =  req.params;
        const eliminado =  await estudiante.destroy({
            where : {Ci_Estudiante : Ci}
        });
        if (!eliminado){
            res.status(404).json({mensaje: 'Estudiante no encontrado'});
        }else{
            return res.redirect('/?message=Estudiante eliminado exitosamente');
            console.log(`Estudiante con CI ${Ci} eliminado`);
        }
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