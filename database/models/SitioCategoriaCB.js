// src/models/SitioCategoriaCB.js
const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const SitiosTuristicos = require("./Sitios_Turisticos");
const Categoria = require("./Categorias");

// Modelo ajustado a la tabla existente Sitio_Categoria
const SitioCategoriaCB = sequelize.define("SitioCategoriaCB", {
  sitio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: SitiosTuristicos, key: "sitio_id" }
  },
  categoria_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: Categoria, key: "categoria_id" }
  }
}, {
  tableName: "Sitio_Categoria", // <-- apuntando a la tabla real
  timestamps: false
});

// Relaciones
SitioCategoriaCB.belongsTo(SitiosTuristicos, { foreignKey: "sitio_id" });
SitioCategoriaCB.belongsTo(Categoria, { foreignKey: "categoria_id" });

module.exports = SitioCategoriaCB;
