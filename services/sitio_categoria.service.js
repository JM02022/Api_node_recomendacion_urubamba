const SitioCategoria = require("../database/models/Sitio_Categoria");
const SitioTuristico = require("../database/models/Sitios_Turisticos");
const Categoria = require("../database/models/Categorias");

// ----------------------------------------------
// Asignar una categoría a un sitio
// ----------------------------------------------
const addCategoriaToSitio = async (sitio_id, categoria_id) => {
  try {
    const exists = await SitioCategoria.findOne({ where: { sitio_id, categoria_id } });
    if (exists) return exists; // Ya existe, no duplicar

    const asignacion = await SitioCategoria.create({ sitio_id, categoria_id });
    return asignacion;
  } catch (err) {
    throw new Error("Error al asignar categoría al sitio: " + err.message);
  }
};

// ----------------------------------------------
// Quitar una categoría de un sitio
// ----------------------------------------------
const removeCategoriaFromSitio = async (sitio_id, categoria_id) => {
  try {
    const deleted = await SitioCategoria.destroy({ where: { sitio_id, categoria_id } });
    return deleted > 0;
  } catch (err) {
    throw new Error("Error al eliminar categoría del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todas las categorías de un sitio
// ----------------------------------------------
const getCategoriasBySitio = async (sitio_id) => {
  try {
    const categorias = await SitioCategoria.findAll({
      where: { sitio_id },
      include: [{ model: Categoria }]
    });
    return categorias;
  } catch (err) {
    throw new Error("Error al obtener categorías del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todos los sitios de una categoría
// ----------------------------------------------
const getSitiosByCategoria = async (categoria_id) => {
  try {
    const sitios = await SitioCategoria.findAll({
      where: { categoria_id },
      include: [{ model: SitioTuristico }]
    });
    return sitios;
  } catch (err) {
    throw new Error("Error al obtener sitios de la categoría: " + err.message);
  }
};

module.exports = {
  addCategoriaToSitio,
  removeCategoriaFromSitio,
  getCategoriasBySitio,
  getSitiosByCategoria,
};
