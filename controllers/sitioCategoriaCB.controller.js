// src/controllers/sitioCategoriaCB.controller.js
const sitioCategoriaService = require("../services/sitioCategoriaCB.service");

// Obtener todas las relaciones
const getAllSitioCategorias = async (req, res) => {
  try {
    const relaciones = await sitioCategoriaService.getAllSitioCategorias();
    res.json({ relaciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// Obtener categorías por sitio
const getCategoriasBySitio = async (req, res) => {
  const { sitio_id } = req.params;
  try {
    const categorias = await sitioCategoriaService.getCategoriasBySitio(sitio_id);
    res.json({ categorias });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener categorías del sitio: " + err.message });
  }
};

// Crear relación sitio-categoría
const createSitioCategoria = async (req, res) => {
  try {
    const rel = await sitioCategoriaService.createSitioCategoria(req.body);
    res.status(201).json(rel);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear relación sitio-categoría: " + err.message });
  }
};

// Eliminar relación
const deleteSitioCategoria = async (req, res) => {
  const { sitio_id, categoria_id } = req.params;
  try {
    const deleted = await sitioCategoriaService.deleteSitioCategoria(sitio_id, categoria_id);
    if (!deleted) return res.status(404).json({ message: "Relación no encontrada" });
    res.json({ message: "Relación eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar relación: " + err.message });
  }
};

module.exports = {
  getAllSitioCategorias,
  getCategoriasBySitio,
  createSitioCategoria,
  deleteSitioCategoria
};
