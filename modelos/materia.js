const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');
const docente = require('./docente');
const Materia = sequelize.define('materia',{
    ID_Materia : {
        type : DataTypes.INTEGER,
        allowNull : false,
        primaryKey : true,
    },
    Nombre_Materia : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Descripción : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Créditos : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Ci_Docente : {
        type : DataTypes.INTEGER,
        allowNull : false,
        references : {
            model : docente,
            key : 'Ci_Docente'
        }
    },
});
// relacion 1 a 1
Materia.belongsTo(docente, {foreignKey: 'Ci_Docente', as: 'docente'});
// relacion 1 a muhcos
docente.hasMany(Materia, {foreignKey : 'Ci_Docente', as: 'materias'});
module.exports = Materia;