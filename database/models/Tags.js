const { DataTypes } = require("sequelize");
const sequelize = require("../connection");

const Tag = sequelize.define("Tags", {
  tag_id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  nombre_tag: { type: DataTypes.STRING(100), allowNull: false },
}, { tableName: "Tags", timestamps: false });

module.exports = Tag;
