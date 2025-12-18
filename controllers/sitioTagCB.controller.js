// src/controllers/sitioTagCB.controller.js
const sitioTagService = require("../services/sitioTagCB.service");

// Obtener todos los tags de sitios
const getAllSitioTags = async (req, res) => {
  try {
    const tags = await sitioTagService.getAllSitioTags();
    res.json({ tags });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// Obtener tags por sitio
const getTagsBySitio = async (req, res) => {
  const { sitio_id } = req.params;
  try {
    const tags = await sitioTagService.getTagsBySitio(sitio_id);
    res.json({ tags });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener tags del sitio: " + err.message });
  }
};

// Crear relación sitio-tag
const createSitioTag = async (req, res) => {
  try {
    const rel = await sitioTagService.createSitioTag(req.body);
    res.status(201).json(rel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear relación sitio-tag: " + err.message });
  }
};

// Eliminar relación
const deleteSitioTag = async (req, res) => {
  const { sitio_id, tag_id } = req.params;
  try {
    const deleted = await sitioTagService.deleteSitioTag(sitio_id, tag_id);
    if (!deleted) return res.status(404).json({ message: "Relación no encontrada" });
    res.json({ message: "Relación eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar relación: " + err.message });
  }
};

module.exports = {
  getAllSitioTags,
  getTagsBySitio,
  createSitioTag,
  deleteSitioTag
};
