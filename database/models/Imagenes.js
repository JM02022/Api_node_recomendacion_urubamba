const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Imagen = sequelize.define("Imagenes", {
  imagen_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sitio_id: { type: DataTypes.INTEGER, allowNull: false },
  url_imagen: { type: DataTypes.STRING(255), allowNull: false },
  descripcion: { type: DataTypes.STRING(255) },
  fecha_subida: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  orden: { type: DataTypes.INTEGER, defaultValue: 1 },
}, { tableName: "Imagenes", timestamps: false });

module.exports = Imagen;
