var mysql = require('mysql');
const Sequelize = require('sequelize');
const db = new Sequelize('CRM', 'root', 'N1especjalNie', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    
})

db.sync()
  .then(() => {
    console.log(`Database & tables created!`)
  })


db.authenticate()
    .then(() => console.log('Database connected!!!'))
    .catch(err => console.log('Error' + err))



module.exports = db;