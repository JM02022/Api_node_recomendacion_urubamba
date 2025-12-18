// src/services/sitioTagCB.service.js
const SitioTagCB = require("../database/models/SitioTagCB");

// ----------------------------------------------
// Obtener todos los tags de sitios
// ----------------------------------------------
const getAllSitioTags = async () => {
  try {
    return await SitioTagCB.findAll();
  } catch (err) {
    throw new Error("Error al obtener tags de sitios: " + err.message);
  }
};

// ----------------------------------------------
// Obtener tags por sitio
// ----------------------------------------------
const getTagsBySitio = async (sitio_id) => {
  try {
    return await SitioTagCB.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener tags del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear nueva relación sitio-tag
// ----------------------------------------------
const createSitioTag = async (data) => {
  try {
    const rel = await SitioTagCB.create(data);
    return rel;
  } catch (err) {
    throw new Error("Error al crear relación sitio-tag: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar relación sitio-tag
// ----------------------------------------------
const deleteSitioTag = async (sitio_id, tag_id) => {
  try {
    const rel = await SitioTagCB.findOne({ where: { sitio_id, tag_id } });
    if (!rel) return false;

    await rel.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar relación sitio-tag: " + err.message);
  }
};

module.exports = {
  getAllSitioTags,
  getTagsBySitio,
  createSitioTag,
  deleteSitioTag
};
