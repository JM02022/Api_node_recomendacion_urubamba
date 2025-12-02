const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Score = sequelize.define("Scores", {
  score_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  usuario_id: { type: DataTypes.INTEGER, allowNull: false },
  sitio_id: { type: DataTypes.INTEGER, allowNull: false },
  score: { type: DataTypes.DECIMAL(5,2), allowNull: false },
  metodo: { type: DataTypes.ENUM("colaborativo","contenido","hibrido"), allowNull: false },
  fecha_calculo: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
}, { tableName: "Scores", timestamps: false });

module.exports = Score;
