const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Estudiante = require('./estudiante');
const estudiante = require('./estudiante');
const materia = require('./materia');
const docente = require('./docente');
const Matricula = sequelize.define('matricula', {
    ID_Matricula :{
        type : DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Ci_Estudiante : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : estudiante,
            key : 'Ci_Estudiante'
        }
    },
    ID_Materia : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : materia,
            key : 'ID_Materia'
        }
    },
    Ci_Docente : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : docente,
            key : 'Ci_Docente'
        }
    },
    Fecha_Matricula : {
        type : DataTypes.DATE,
        allowNull : false
    },
    Periodo : {
        type : DataTypes.STRING,
        allowNull : false
    },
    Numero_Semestre : {
        type : DataTypes.INTEGER,
        allowNull : false
    },
    Anio_Estudio : {
        type : DataTypes.INTEGER,
        allowNull : false
    }
});
// relacion 1 a 1
Matricula.belongsTo(estudiante, {foreignKey: 'Ci_Estudiante', as: 'estudiante'});
// relacion 1 a muhcos
estudiante.hasMany(Matricula, {foreignKey : 'Ci_Estudiante', as: 'matricula'})


// relacion 1 a 1
Matricula.belongsTo(docente, {foreignKey: 'Ci_Docente', as: 'docente'});
// relacion 1 a muhcos
docente.hasMany(Matricula, {foreignKey : 'Ci_Docente', as: 'matricula'})


// relacion 1 a 1
Matricula.belongsTo(materia, {foreignKey: 'ID_Materia', as: 'materia'});
// relacion 1 a muhcos
materia.hasMany(Matricula, {foreignKey : 'ID_Materia', as: 'matricula'})
module.exports = Matricula;