// src/controllers/actividades.controller.js
const sitios_turisticos_Service = require("../services/sitios_turisticos.service");

// ----------------------------------------------
// Obtener todos los sitios turísticos
// ----------------------------------------------
const getAllActividades = async (req, res) => {
  try {
    const sitios = await sitios_turisticos_Service.getAllSitios();
    res.json({ sitios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// ----------------------------------------------
// Obtener un sitio turístico por ID
// ----------------------------------------------
const getActividadById = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const sitio = await sitios_turisticos_Service.getSitioById(sitio_id);

    if (!sitio) {
      return res.status(404).json({ message: "Sitio no encontrado" });
    }

    res.json({ sitio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// ----------------------------------------------
// Crear un nuevo sitio turístico
// ----------------------------------------------
const createActividad = async (req, res) => {
  try {
    const sitioData = req.body;
    const sitio = await sitios_turisticos_Service.createSitio(sitioData);
    res.status(201).json(sitio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear sitio: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar un sitio turístico
// ----------------------------------------------
const updateActividad = async (req, res) => {
  const { sitio_id } = req.params;
  const newData = req.body;

  try {
    const sitio = await sitios_turisticos_Service.updateSitio(sitio_id, newData);

    if (!sitio) {
      return res.status(404).json({ message: "Sitio no encontrado" });
    }

    res.json(sitio);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar sitio: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar un sitio turístico
// ----------------------------------------------
const deleteActividad = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const deleted = await sitios_turisticos_Service.deleteSitio(sitio_id);

    if (!deleted) {
      return res.status(404).json({ message: "Sitio no encontrado" });
    }

    res.json({ message: "Sitio eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar sitio: " + err.message });
  }
};

module.exports = {
  getAllActividades,
  getActividadById,
  createActividad,
  updateActividad,
  deleteActividad,
};
