const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const SitioCategoria = sequelize.define("Sitio_Categoria", {
  sitio_id: { type: DataTypes.INTEGER, primaryKey: true },
  categoria_id: { type: DataTypes.INTEGER, primaryKey: true },
}, { tableName: "Sitio_Categoria", timestamps: false });

module.exports = SitioCategoria;
