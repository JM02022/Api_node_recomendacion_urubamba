// src/database/connection.js
const { Sequelize } = require("sequelize");
const config = require("../config/environment");

// Crear instancia de Sequelize con los datos de config
const sequelize = new Sequelize(
  config.db.database,
  config.db.user,
  config.db.password,
  {
    host: config.db.host,
    port: config.db.port,
    dialect: config.db.dialect,
    logging: false, // cambiar a true si quieres ver las consultas SQL
  }
);

module.exports = sequelize;
