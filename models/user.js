const Sequelize = require("sequelize");
const db = require('../config/db-connect');


const user = db.define('Users', {
    id: {
        type: Sequelize.INTEGER(11),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    surname: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    dateOfBirth: {
        type: Sequelize.DATE(),
        allowNull: false,
    },
    login: {
        type: Sequelize.STRING(255),
        allowNull: false,
        unique: true,
    },
    passwordMd5: {
        type: Sequelize.STRING(255),
        allowNull: false,
    },
    idRole: {
        type: Sequelize.INTEGER(),
        allowNull: false,
    },
    isDeleted: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
  });
  

  module.exports = user