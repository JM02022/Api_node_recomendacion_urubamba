// src/models/Recomendaciones.js
const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

// Importar modelos relacionados
const SitioTuristico = require("./Sitios_Turisticos");
const Usuario = require("./Usuarios");
const Imagenes = require("./Imagenes"); // si quieres incluir imágenes

const Recomendaciones = sequelize.define("Recomendaciones", {
  recomendacion_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  usuario_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: Usuario, key: "usuario_id" }
  },
  sitio_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: { model: SitioTuristico, key: "sitio_id" }
  },
  score: {
    type: DataTypes.DECIMAL(5,2),
    allowNull: false
  },
  metodo: {
    type: DataTypes.ENUM("colaborativo","contenido","hibrido"),
    allowNull: false
  },
  fecha_calculo: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: "Recomendaciones",
  timestamps: false
});

// Relaciones
Recomendaciones.belongsTo(SitioTuristico, { foreignKey: "sitio_id" });
Recomendaciones.belongsTo(Usuario, { foreignKey: "usuario_id" });

// Si quieres incluir imágenes cuando traes SitioTuristico
SitioTuristico.hasMany(Imagenes, { foreignKey: "sitio_id" });

module.exports = Recomendaciones;
