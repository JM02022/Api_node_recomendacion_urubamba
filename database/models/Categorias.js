const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Categoria = sequelize.define("Categorias", {
  categoria_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  descripcion: { type: DataTypes.TEXT },
}, { tableName: "Categorias", timestamps: false });

module.exports = Categoria;
