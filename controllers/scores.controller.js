const scoresService = require("../services/scores.service");

// ----------------------------------------------
// Listar todos los scores
// ----------------------------------------------
const getAllScores = async (req, res) => {
  try {
    const scores = await scoresService.getAllScores();
    res.json({ scores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener scores: " + err.message });
  }
};

// ----------------------------------------------
// Obtener scores por usuario
// ----------------------------------------------
const getScoresByUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const scores = await scoresService.getScoresByUsuario(usuario_id);
    res.json({ scores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener scores del usuario: " + err.message });
  }
};

// ----------------------------------------------
// Obtener scores por sitio
// ----------------------------------------------
const getScoresBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const scores = await scoresService.getScoresBySitio(sitio_id);
    res.json({ scores });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener scores del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Crear o actualizar score
// ----------------------------------------------
const createOrUpdateScore = async (req, res) => {
  try {
    const { usuario_id, sitio_id, score, metodo } = req.body;

    const newScore = await scoresService.createOrUpdateScore(usuario_id, sitio_id, score, metodo);
    res.status(201).json({ message: "Score creado/actualizado correctamente", newScore });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear o actualizar score: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar score
// ----------------------------------------------
const deleteScore = async (req, res) => {
  const { score_id } = req.params;

  try {
    const deleted = await scoresService.deleteScore(score_id);
    if (!deleted) return res.status(404).json({ message: "Score no encontrado" });

    res.json({ message: "Score eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar score: " + err.message });
  }
};

module.exports = {
  getAllScores,
  getScoresByUsuario,
  getScoresBySitio,
  createOrUpdateScore,
  deleteScore,
};
