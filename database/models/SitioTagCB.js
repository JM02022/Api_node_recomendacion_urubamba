// src/models/SitioTagCB.js
const { DataTypes } = require("sequelize");
const sequelize = require("../connection");
const SitioTuristico = require("./Sitios_Turisticos");
const Tag = require("./Tags");

// Modelo ajustado a la tabla existente Sitio_Tag
const SitioTagCB = sequelize.define("SitioTagCB", {
  sitio_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: SitioTuristico, key: "sitio_id" }
  },
  tag_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: { model: Tag, key: "tag_id" }
  }
}, {
  tableName: "Sitio_Tag", // <-- apuntando a la tabla real
  timestamps: false
});

// Relaciones
SitioTagCB.belongsTo(SitioTuristico, { foreignKey: "sitio_id" });
SitioTagCB.belongsTo(Tag, { foreignKey: "tag_id" });

module.exports = SitioTagCB;
