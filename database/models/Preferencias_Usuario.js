const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const PreferenciaUsuario = sequelize.define("Preferencias_Usuario", {
  preferencia_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  categoria_id: { type: DataTypes.INTEGER, allowNull: false },
  nivel_interes: { type: DataTypes.TINYINT, defaultValue: 3 },
  fecha_actualizacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "Preferencias_Usuario", timestamps: false });

module.exports = PreferenciaUsuario;
