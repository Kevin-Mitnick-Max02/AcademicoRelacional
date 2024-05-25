const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('academicodb', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql',
    define :{
        timestamps : false
    }
  });
  //exportar
  module.exports = sequelize;