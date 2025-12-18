// src/controllers/recomendaciones.controller.js
const recomendacionesService = require("../services/recomendaciones.service");

// ----------------------------------------------
// Obtener todas las recomendaciones
// ----------------------------------------------
const getAllRecomendaciones = async (req, res) => {
  try {
    const recomendaciones = await recomendacionesService.getAllRecomendaciones();
    res.json({ recomendaciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// ----------------------------------------------
// Obtener recomendaciones completas por usuario
// ----------------------------------------------
const getRecomendacionesByUser = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const recomendaciones = await recomendacionesService.getRecomendacionesByUserFull(usuario_id);
    res.json({ recomendaciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// ----------------------------------------------
// Generar recomendaciones Content-Based y devolver sitios completos
// ----------------------------------------------
const generateRecomendaciones = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const recomendaciones = await recomendacionesService.generateRecommendationsFull(usuario_id);
    res.json({ recomendaciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al generar recomendaciones: " + err.message });
  }
};

// ----------------------------------------------
// Crear, actualizar y eliminar recomendación (CRUD)
// ----------------------------------------------
const createRecomendacion = async (req, res) => {
  try {
    const rec = await recomendacionesService.createRecomendacion(req.body);
    res.status(201).json(rec);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear recomendación: " + err.message });
  }
};

const updateRecomendacion = async (req, res) => {
  const { recomendacion_id } = req.params;

  try {
    const rec = await recomendacionesService.updateRecomendacion(recomendacion_id, req.body);
    if (!rec) return res.status(404).json({ message: "Recomendación no encontrada" });
    res.json(rec);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar recomendación: " + err.message });
  }
};

const deleteRecomendacion = async (req, res) => {
  const { recomendacion_id } = req.params;

  try {
    const deleted = await recomendacionesService.deleteRecomendacion(recomendacion_id);
    if (!deleted) return res.status(404).json({ message: "Recomendación no encontrada" });
    res.json({ message: "Recomendación eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar recomendación: " + err.message });
  }
};

module.exports = {
  getAllRecomendaciones,
  getRecomendacionesByUser,
  generateRecomendaciones,
  createRecomendacion,
  updateRecomendacion,
  deleteRecomendacion
};
