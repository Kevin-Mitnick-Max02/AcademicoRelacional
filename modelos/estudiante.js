const { DataTypes } = require ('sequelize');
const sequelize = require('../config/database');

const estudiante = sequelize.define('estudiantes',{
    Ci_Estudiante : {
        type : DataTypes.INTEGER,
        primaryKey : true,
    },
    nombres : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    apellidos : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    fecha_de_nacimiento : {
        type : DataTypes.DATE,  
       // allowNull : false
    },
    municipio : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    direccion : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    telefonos : {
        type : DataTypes.INTEGER,
        // allowNull : false
    },
    email : {
        type : DataTypes.STRING,
       // allowNull : false
    },
    carrera : {
        type : DataTypes.STRING,
       // allowNull : false
    }
});
module.exports = estudiante;