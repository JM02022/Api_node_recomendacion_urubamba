const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Usuario = sequelize.define("Usuarios", {
  usuario_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(100), allowNull: false },
  email: { type: DataTypes.STRING(100), allowNull: false, unique: true },
  contrasena: { type: DataTypes.STRING(255), allowNull: false, field: "contrasena" },
  fecha_nacimiento: { type: DataTypes.DATEONLY },
  genero: { type: DataTypes.ENUM("M","F","Otro"), defaultValue: "Otro" },
  pais_origen: { type: DataTypes.STRING(50) },
  idioma_preferido: { type: DataTypes.STRING(50) },
  fecha_registro: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  ultima_actividad: { type: DataTypes.DATE },
}, { tableName: "Usuarios", timestamps: false });

module.exports = Usuario;
