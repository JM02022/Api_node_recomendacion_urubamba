const Resena = require("../database/models/Reseñas");

// ----------------------------------------------
// Obtener todas las reseñas
// ----------------------------------------------
const getAllResenas = async () => {
  try {
    return await Resena.findAll();
  } catch (err) {
    throw new Error("Error al obtener reseñas: " + err.message);
  }
};

// ----------------------------------------------
// Obtener reseña por ID
// ----------------------------------------------
const getResenaById = async (resena_id) => {
  try {
    return await Resena.findByPk(resena_id);
  } catch (err) {
    throw new Error("Error al obtener la reseña: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todas las reseñas de un usuario
// ----------------------------------------------
const getResenasByUsuario = async (usuario_id) => {
  try {
    return await Resena.findAll({ where: { usuario_id } });
  } catch (err) {
    throw new Error("Error al obtener reseñas del usuario: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todas las reseñas de un sitio
// ----------------------------------------------
const getResenasBySitio = async (sitio_id) => {
  try {
    return await Resena.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener reseñas del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear una nueva reseña
// ----------------------------------------------
const createResena = async (resenaData) => {
  try {
    const { usuario_id, sitio_id, puntuacion, comentario } = resenaData;

    if (!usuario_id || !sitio_id || !puntuacion) {
      throw new Error("usuario_id, sitio_id y puntuacion son requeridos");
    }

    if (puntuacion < 1 || puntuacion > 5) {
      throw new Error("La puntuación debe estar entre 1 y 5");
    }

    const resena = await Resena.create(resenaData);
    return resena;
  } catch (err) {
    throw new Error("Error al crear reseña: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar una reseña
// ----------------------------------------------
const updateResena = async (resena_id, newData) => {
  try {
    const resena = await Resena.findByPk(resena_id);
    if (!resena) return null;

    if (newData.puntuacion && (newData.puntuacion < 1 || newData.puntuacion > 5)) {
      throw new Error("La puntuación debe estar entre 1 y 5");
    }

    await resena.update(newData);
    return resena;
  } catch (err) {
    throw new Error("Error al actualizar reseña: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar una reseña
// ----------------------------------------------
const deleteResena = async (resena_id) => {
  try {
    const resena = await Resena.findByPk(resena_id);
    if (!resena) return false;

    await resena.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar reseña: " + err.message);
  }
};

module.exports = {
  getAllResenas,
  getResenaById,
  getResenasByUsuario,
  getResenasBySitio,
  createResena,
  updateResena,
  deleteResena,
};
