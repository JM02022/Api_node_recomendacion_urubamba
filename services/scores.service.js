const Score = require("../database/models/Scores");
const Usuario = require("../database/models/Usuarios");
const SitioTuristico = require("../database/models/Sitios_Turisticos");

// ----------------------------------------------
// Obtener todos los scores
// ----------------------------------------------
const getAllScores = async () => {
  try {
    return await Score.findAll();
  } catch (err) {
    throw new Error("Error al obtener scores: " + err.message);
  }
};

// ----------------------------------------------
// Obtener scores por usuario
// ----------------------------------------------
const getScoresByUsuario = async (usuario_id) => {
  try {
    return await Score.findAll({ where: { usuario_id } });
  } catch (err) {
    throw new Error("Error al obtener scores del usuario: " + err.message);
  }
};

// ----------------------------------------------
// Obtener scores por sitio
// ----------------------------------------------
const getScoresBySitio = async (sitio_id) => {
  try {
    return await Score.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener scores del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear o actualizar score
// ----------------------------------------------
const createOrUpdateScore = async (usuario_id, sitio_id, scoreValue, metodo) => {
  try {
    // Validar existencia de usuario y sitio
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) throw new Error("Usuario no existe");

    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) throw new Error("Sitio turístico no existe");

    // Validar método
    const metodosValidos = ["colaborativo", "contenido", "hibrido"];
    if (!metodosValidos.includes(metodo)) {
      throw new Error("Método inválido");
    }

    // Buscar score existente
    let score = await Score.findOne({ where: { usuario_id, sitio_id, metodo } });

    if (score) {
      score.score = scoreValue;
      score.fecha_calculo = new Date();
      await score.save();
    } else {
      score = await Score.create({ usuario_id, sitio_id, score: scoreValue, metodo });
    }

    return score;
  } catch (err) {
    throw new Error("Error al crear o actualizar score: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar score
// ----------------------------------------------
const deleteScore = async (score_id) => {
  try {
    const score = await Score.findByPk(score_id);
    if (!score) return false;

    await score.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar score: " + err.message);
  }
};

module.exports = {
  getAllScores,
  getScoresByUsuario,
  getScoresBySitio,
  createOrUpdateScore,
  deleteScore,
};
