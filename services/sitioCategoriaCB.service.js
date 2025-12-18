// src/services/sitioCategoriaCB.service.js
const SitioCategoriaCB = require("../database/models/SitioCategoriaCB");

// ----------------------------------------------
// Obtener todas las relaciones sitio-categoría
// ----------------------------------------------
const getAllSitioCategorias = async () => {
  try {
    return await SitioCategoriaCB.findAll();
  } catch (err) {
    throw new Error("Error al obtener relaciones sitio-categoría: " + err.message);
  }
};

// ----------------------------------------------
// Obtener categorías por sitio
// ----------------------------------------------
const getCategoriasBySitio = async (sitio_id) => {
  try {
    return await SitioCategoriaCB.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener categorías del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear nueva relación sitio-categoría
// ----------------------------------------------
const createSitioCategoria = async (data) => {
  try {
    const rel = await SitioCategoriaCB.create(data);
    return rel;
  } catch (err) {
    throw new Error("Error al crear relación sitio-categoría: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar relación
// ----------------------------------------------
const deleteSitioCategoria = async (sitio_id, categoria_id) => {
  try {
    const rel = await SitioCategoriaCB.findOne({ where: { sitio_id, categoria_id } });
    if (!rel) return false;

    await rel.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar relación sitio-categoría: " + err.message);
  }
};

module.exports = {
  getAllSitioCategorias,
  getCategoriasBySitio,
  createSitioCategoria,
  deleteSitioCategoria
};
