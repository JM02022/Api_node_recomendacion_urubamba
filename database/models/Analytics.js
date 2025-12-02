const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Analytics = sequelize.define("Analytics", {
  analytics_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  sitio_id: { type: DataTypes.INTEGER, allowNull: false },
  visitas_diarias: { type: DataTypes.INTEGER, defaultValue: 0 },
  clicks_reserva: { type: DataTypes.INTEGER, defaultValue: 0 },
  fecha: { type: DataTypes.DATEONLY, defaultValue: DataTypes.NOW },
}, { tableName: "Analytics", timestamps: false });

module.exports = Analytics;
