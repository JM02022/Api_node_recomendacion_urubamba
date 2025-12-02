const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const HistorialInteraccion = sequelize.define("Historial_Interacciones", {
  interaccion_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  sitio_id: { type: DataTypes.INTEGER, allowNull: false },
  tipo_interaccion: { type: DataTypes.ENUM("visita","like","favorito","reserva"), allowNull: false },
  fecha_interaccion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  duracion: { type: DataTypes.INTEGER },
}, { tableName: "Historial_Interacciones", timestamps: false });

module.exports = HistorialInteraccion;
