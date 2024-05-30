const matricula = require ('../modelos/matricula');
const estudiante = require ('../modelos/estudiante');
const sequelize = require ('../config/database');
const Seq = require ('sequelize');

exports.getTodasLasMatriculas = async (req, res) => {
    try {
        const matriculas = await  matricula.findAll();
        res.json(matriculas);
    } 
    catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

exports.getMatriculaPorEstudiante = async (req, res) => {
    const { nombreEstudiante } = req.params;
    try {
        const estudianteEncontrado = await estudiante.findOne({ where : { nombres: nombreEstudiante } } );
        //console.log(estudianteEncontrado);
        if (!estudianteEncontrado)
            return res.status(404).json({mensaje: 'Estudiante no encontrado'});
        const todasLasMatriculas = await matricula.findAll({
            where : {Ci_Estudiante : estudianteEncontrado.Ci_Estudiante },
            include: [{ model: estudiante, as: 'estudiante' }]
        });
        res.json(todasLasMatriculas);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}

exports.contarMatriculaPorEstudiante = async (req, res) => {
    try {
        const todasMatriculas = await matricula.findAll({
            attributes: [
                'Ci_Estudiante',
                [Seq.fn('COUNT', Seq.col('ID_Matricula')), 'contarMatriculas' ]
            ],
            group: ['Ci_Estudiante'],
            include: [{ model: estudiante, as: 'estudiante', attributes: ['nombres'] }]
        });
        res.json(todasMatriculas);
    }
    catch(error){
        console.log(error);
        res.status(500).send(error);
    }
}