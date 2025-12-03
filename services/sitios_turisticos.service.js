const SitioTuristico = require("../database/models/Sitios_Turisticos");

// ----------------------------------------------
// Obtener todos los sitios
// ----------------------------------------------
const getAllSitios = async () => {
  try {
    return await SitioTuristico.findAll();
  } catch (err) {
    throw new Error("Error al obtener sitios turísticos: " + err.message);
  }
};

// ----------------------------------------------
// Obtener un sitio por ID
// ----------------------------------------------
const getSitioById = async (sitio_id) => {
  try {
    return await SitioTuristico.findByPk(sitio_id);
  } catch (err) {
    throw new Error("Error al obtener el sitio turístico: " + err.message);
  }
};

// ----------------------------------------------
// Crear un nuevo sitio
// ----------------------------------------------
const createSitio = async (sitioData) => {
  try {
    const sitio = await SitioTuristico.create(sitioData);
    return sitio;
  } catch (err) {
    throw new Error("Error al crear sitio turístico: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar un sitio
// ----------------------------------------------
const updateSitio = async (sitio_id, newData) => {
  try {
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) return null;

    await sitio.update(newData);
    return sitio;
  } catch (err) {
    throw new Error("Error al actualizar sitio turístico: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar un sitio
// ----------------------------------------------
const deleteSitio = async (sitio_id) => {
  try {
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) return false;

    await sitio.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar sitio turístico: " + err.message);
  }
};

// ----------------------------------------------
// Incrementar visitas (para analytics)
// ----------------------------------------------
const incrementarVisitas = async (sitio_id) => {
  try {
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) return null;

    sitio.visitas += 1;
    await sitio.save();
    return sitio;
  } catch (err) {
    throw new Error("Error al incrementar visitas: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar rating promedio
// ----------------------------------------------
const actualizarRating = async (sitio_id, nuevoRating) => {
  try {
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) return null;

    sitio.rating_promedio = nuevoRating;
    await sitio.save();
    return sitio;
  } catch (err) {
    throw new Error("Error al actualizar rating: " + err.message);
  }
};

module.exports = {
  getAllSitios,
  getSitioById,
  createSitio,
  updateSitio,
  deleteSitio,
  incrementarVisitas,
  actualizarRating,
};
