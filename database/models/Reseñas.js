const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Resena = sequelize.define("Reseñas", {
  resena_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  sitio_id: { type: DataTypes.INTEGER, allowNull: false },
  puntuacion: { type: DataTypes.TINYINT, allowNull: false },
  comentario: { type: DataTypes.TEXT },
  fecha_resena: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "Reseñas", timestamps: false });

module.exports = Resena;
