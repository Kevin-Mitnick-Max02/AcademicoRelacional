const Sequelize = require('sequelize'); 
const sequelize = new Sequelize('dbacademico', 'root', '', {
    host: 'localhost',
    define :{
        timestamps : false
    }
  });
  //exportar
  module.exports = sequelize;