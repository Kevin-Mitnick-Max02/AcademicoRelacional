
const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');
const docente = sequelize.define('docentes',{
    Ci_Docente : {
        type : DataTypes.INTEGER,
        //allowNull : false,
        primaryKey : true,
    },
    Nombres : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Apellidos : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Correo_Electronico : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    Departamento : {
        type : DataTypes.STRING,
       // allowNull : false
    }
});
module.exports = docente;