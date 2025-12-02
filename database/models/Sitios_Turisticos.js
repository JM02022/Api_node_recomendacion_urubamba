const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const SitioTuristico = sequelize.define("Sitios_Turisticos", {
  sitio_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre: { type: DataTypes.STRING(150), allowNull: false },
  descripcion: { type: DataTypes.TEXT },
  direccion: { type: DataTypes.STRING(255) },
  latitud: { type: DataTypes.DECIMAL(10,8) },
  longitud: { type: DataTypes.DECIMAL(11,8) },
  telefono: { type: DataTypes.STRING(20) },
  email: { type: DataTypes.STRING(100) },
  pagina_web: { type: DataTypes.STRING(150) },
  fecha_creacion: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  estado: { type: DataTypes.ENUM("activo","inactivo","pendiente"), defaultValue: "pendiente" },
  rating_promedio: { type: DataTypes.DECIMAL(3,2), defaultValue: 0 },
  visitas: { type: DataTypes.INTEGER, defaultValue: 0 },
  precio_estimado: { type: DataTypes.DECIMAL(10,2) },
}, { tableName: "Sitios_Turisticos", timestamps: false });

module.exports = SitioTuristico;
