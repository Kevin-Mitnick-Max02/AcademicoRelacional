const matricula = require ('../modelos/matricula');
const estudiante = require ('../modelos/estudiante');
const sequelize = require ('../config/database');
const Seq = require ('sequelize');

exports.getTodasLasMatriculas = async (req, res) => {
    try {
        const matricula = await  matricula.findAll();
        res.json(matricula);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.getMatriculaPorEstudiante = async (req, res) => {
    const { nombreEstudiante } = peticion.params;
    try {
        const estudianteEncontrado = await estudiante.findOne({ where : { nombres: nombreEstudiante } } );
        if (!estudianteEncontrado)
            return res.status(404).json({mensaje: 'Estudiante no encontrado'});
        const todasLasMatriculas = await matricula.findAll({
            where : {Ci_Estudiante : estudianteEncontrado.Ci_Estudiante },
            include: [{ model: estudiante, as: 'estudiante' }]
        });
        res.json(todosVersiculos);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

exports.contarMatriculaPorEstudiante = async (req, res) => {
    try {
        const todasMatriculas = await Materia.findAll({
            attributes: [
                'Ci_Estudiante',
                [Seq.fn('COUNT', Seq.col('ID_Matricula')), 'contarMatricula' ]
            ],
            group: ['Ci_Estudianteo'],
            include: [{ model: estudiante, as: 'estudiantes', attributes: ['nombres'] }]
        });
        res.json(todasMatriculas);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}