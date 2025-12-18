// src/services/recomendaciones.service.js
const Recomendaciones = require("../database/models/Recomendaciones");
const SitioCategoriaCBService = require("./sitioCategoriaCB.service");
const SitioTagCBService = require("./sitioTagCB.service");
const SitiosService = require("./sitios_turisticos.service");
const PreferenciaUsuario = require("../database/models/Preferencias_Usuario");
const SitioTuristico = require("../database/models/Sitios_Turisticos");
const Imagenes = require("../database/models/Imagenes");
const { Op } = require("sequelize");
// ----------------------------------------------
// CRUD Básico
// ----------------------------------------------
const getAllRecomendaciones = async () => {
  try {
    return await Recomendaciones.findAll();
  } catch (err) {
    throw new Error("Error al obtener recomendaciones: " + err.message);
  }
};

const getRecomendacionesByUser = async (usuario_id) => {
  try {
    return await Recomendaciones.findAll({ where: { usuario_id } });
  } catch (err) {
    throw new Error("Error al obtener recomendaciones del usuario: " + err.message);
  }
};

const createRecomendacion = async (data) => {
  try {
    const rec = await Recomendaciones.create(data);
    return rec;
  } catch (err) {
    throw new Error("Error al crear recomendación: " + err.message);
  }
};

const updateRecomendacion = async (recomendacion_id, newData) => {
  try {
    const rec = await Recomendaciones.findByPk(recomendacion_id);
    if (!rec) return null;

    await rec.update(newData);
    return rec;
  } catch (err) {
    throw new Error("Error al actualizar recomendación: " + err.message);
  }
};

const deleteRecomendacion = async (recomendacion_id) => {
  try {
    const rec = await Recomendaciones.findByPk(recomendacion_id);
    if (!rec) return false;

    await rec.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar recomendación: " + err.message);
  }
};

// ----------------------------------------------
// Generación automática de recomendaciones
// ----------------------------------------------
const generateRecommendations = async (usuario_id, top = 10) => {
  try {
    const preferencias = await PreferenciaUsuario.findAll({ where: { usuario_id } });
    if (!preferencias.length) return [];

    const userVector = {};
    preferencias.forEach(pref => userVector[pref.categoria_id] = pref.nivel_interes);

    const sitios = await SitiosService.getAllSitios();
    const scores = [];

    for (const sitio of sitios) {
      const categorias = await SitioCategoriaCBService.getCategoriasBySitio(sitio.sitio_id);
      const tags = await SitioTagCBService.getTagsBySitio(sitio.sitio_id);

      const siteVector = {};
      categorias.forEach(c => siteVector[c.categoria_id] = 1);

      let dot = 0, normUser = 0, normSite = 0;
      for (const key of Object.keys(userVector)) {
        const u = userVector[key];
        const s = siteVector[key] || 0;
        dot += u * s;
        normUser += u * u;
        normSite += s * s;
      }
      const similarity = (normUser && normSite) ? dot / (Math.sqrt(normUser) * Math.sqrt(normSite)) : 0;

      const score = (0.6 * similarity) + (0.2 * (sitio.rating_promedio / 5)) + (0.2 * (sitio.visitas / 1000));
      scores.push({ sitio_id: sitio.sitio_id, score: parseFloat(score.toFixed(2)) });
    }

    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, top);

    for (const s of topScores) {
      const existing = await Recomendaciones.findOne({ where: { usuario_id, sitio_id: s.sitio_id } });
      if (existing) {
        await existing.update({ score: s.score });
      } else {
        await Recomendaciones.create({ usuario_id, sitio_id: s.sitio_id, score: s.score, metodo: "contenido" });
      }
    }

    return topScores;

  } catch (err) {
    throw new Error("Error al generar recomendaciones: " + err.message);
  }
};
// ----------------------------------------------
// Obtener recomendaciones de un usuario con datos completos del sitio
// ----------------------------------------------
const getRecomendacionesByUserFull = async (usuario_id) => {
  try {
    const recomendaciones = await Recomendaciones.findAll({
      where: { usuario_id },
      include: [
        {
          model: SitioTuristico,
          include: [Imagenes] // Incluye las imágenes del sitio
        }
      ]
    });
    return recomendaciones;
  } catch (err) {
    throw new Error("Error al obtener recomendaciones del usuario: " + err.message);
  }
};

// ----------------------------------------------
// Generar recomendaciones Content-Based y devolver datos completos
// ----------------------------------------------
const generateRecommendationsFull = async (usuario_id, top = 10) => {
  try {
    const topScores = await generateRecommendations(usuario_id, top);

    // Traer info completa de los sitios
    const sitiosCompleto = [];
    for (const s of topScores) {
      const sitio = await SitioTuristico.findByPk(s.sitio_id, { include: [Imagenes] });
      if (sitio) {
        sitiosCompleto.push({
          score: s.score,
          metodo: "contenido",
          sitio
        });
      }
    }

    return sitiosCompleto;
  } catch (err) {
    throw new Error("Error al generar recomendaciones completas: " + err.message);
  }
};

module.exports = {
  getAllRecomendaciones,
  getRecomendacionesByUser,
  getRecomendacionesByUserFull,
  createRecomendacion,
  updateRecomendacion,
  deleteRecomendacion,
  generateRecommendations,
  generateRecommendationsFull
};