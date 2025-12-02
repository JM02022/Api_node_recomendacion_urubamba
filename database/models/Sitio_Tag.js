const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const SitioTag = sequelize.define("Sitio_Tag", {
  sitio_id: { type: DataTypes.INTEGER, primaryKey: true },
  tag_id: { type: DataTypes.INTEGER, primaryKey: true },
}, { tableName: "Sitio_Tag", timestamps: false });

module.exports = SitioTag;
