const HistorialInteraccion = require("../database/models/Historial_Interacciones");
const Usuario = require("../database/models/Usuarios");
const SitioTuristico = require("../database/models/Sitios_Turisticos");

// ----------------------------------------------
// Obtener todas las interacciones
// ----------------------------------------------
const getAllInteracciones = async () => {
  try {
    return await HistorialInteraccion.findAll();
  } catch (err) {
    throw new Error("Error al obtener interacciones: " + err.message);
  }
};

// ----------------------------------------------
// Obtener interacción por ID
// ----------------------------------------------
const getInteraccionById = async (interaccion_id) => {
  try {
    return await HistorialInteraccion.findByPk(interaccion_id);
  } catch (err) {
    throw new Error("Error al obtener la interacción: " + err.message);
  }
};

// ----------------------------------------------
// Obtener interacciones por usuario
// ----------------------------------------------
const getInteraccionesByUsuario = async (usuario_id) => {
  try {
    return await HistorialInteraccion.findAll({ where: { usuario_id } });
  } catch (err) {
    throw new Error("Error al obtener interacciones del usuario: " + err.message);
  }
};

// ----------------------------------------------
// Obtener interacciones por sitio
// ----------------------------------------------
const getInteraccionesBySitio = async (sitio_id) => {
  try {
    return await HistorialInteraccion.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener interacciones del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear una nueva interacción
// ----------------------------------------------
const createInteraccion = async (interaccionData) => {
  try {
    const { usuario_id, sitio_id, tipo_interaccion, duracion } = interaccionData;

    if (!usuario_id || !sitio_id || !tipo_interaccion) {
      throw new Error("usuario_id, sitio_id y tipo_interaccion son requeridos");
    }

    // Validar existencia de usuario
    const usuario = await Usuario.findByPk(usuario_id);
    if (!usuario) throw new Error("Usuario no existe");

    // Validar existencia de sitio
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) throw new Error("Sitio turístico no existe");

    // Validar tipo_interaccion
    const tiposValidos = ["visita", "like", "favorito", "reserva"];
    if (!tiposValidos.includes(tipo_interaccion)) {
      throw new Error("Tipo de interacción inválido");
    }

    const interaccion = await HistorialInteraccion.create(interaccionData);
    return interaccion;
  } catch (err) {
    throw new Error("Error al crear interacción: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar una interacción
// ----------------------------------------------
const deleteInteraccion = async (interaccion_id) => {
  try {
    const interaccion = await HistorialInteraccion.findByPk(interaccion_id);
    if (!interaccion) return false;

    await interaccion.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar interacción: " + err.message);
  }
};

module.exports = {
  getAllInteracciones,
  getInteraccionById,
  getInteraccionesByUsuario,
  getInteraccionesBySitio,
  createInteraccion,
  deleteInteraccion,
};
