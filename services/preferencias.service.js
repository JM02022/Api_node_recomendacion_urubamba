// src/services/preferencias.service.js

const PreferenciaUsuario = require("../database/models/Preferencias_Usuario");

// ----------------------------------------------
// Obtener TODAS las preferencias
// ----------------------------------------------
const getAllPreference = async () => {
  try {
    return await PreferenciaUsuario.findAll();
  } catch (error) {
    throw new Error("Error al obtener todas las preferencias: " + error.message);
  }
};

// ----------------------------------------------
// Obtener preferencias de un usuario
// ----------------------------------------------
const getPreferencesByUser = async (usuario_id) => {
  try {
    return await PreferenciaUsuario.findAll({
      where: { usuario_id },
    });
  } catch (error) {
    throw new Error("Error al obtener preferencias del usuario: " + error.message);
  }
};

// ----------------------------------------------
// Obtener UNA sola preferencia especifica
// ----------------------------------------------
const getPreference = async (usuario_id, categoria_id) => {
  try {
    return await PreferenciaUsuario.findOne({
      where: { usuario_id, categoria_id },
    });
  } catch (error) {
    throw new Error("Error al obtener la preferencia: " + error.message);
  }
};

// ----------------------------------------------
// Crear o actualizar preferencia (UPSET)
// ----------------------------------------------
const createOrUpdatePreference = async (usuario_id, categoria_id, nivel_interes) => {
  try {
    const pref = await PreferenciaUsuario.findOne({
      where: { usuario_id, categoria_id },
    });

    if (pref) {
      pref.nivel_interes = nivel_interes;
      pref.fecha_actualizacion = new Date();
      await pref.save();
      return pref;
    }

    return await PreferenciaUsuario.create({
      usuario_id,
      categoria_id,
      nivel_interes,
    });
  } catch (error) {
    throw new Error("Error al crear o actualizar preferencia: " + error.message);
  }
};

// ----------------------------------------------
// Actualizar preferencia por ID
// ----------------------------------------------
const updatePreference = async (preferencia_id, newData) => {
  try {
    const pref = await PreferenciaUsuario.findByPk(preferencia_id);
    if (!pref) return null;

    await pref.update({
      ...newData,
      fecha_actualizacion: new Date(),
    });

    return pref;
  } catch (error) {
    throw new Error("Error al actualizar la preferencia: " + error.message);
  }
};

// ----------------------------------------------
// Eliminar una preferencia por ID
// ----------------------------------------------
const deletePreference = async (preferencia_id) => {
  try {
    const pref = await PreferenciaUsuario.findByPk(preferencia_id);
    if (!pref) return false;

    await pref.destroy();
    return true;
  } catch (error) {
    throw new Error("Error al eliminar la preferencia: " + error.message);
  }
};

// ----------------------------------------------
// Eliminar TODAS las preferencias de un usuario
// ----------------------------------------------
const deletePreferencesByUser = async (usuario_id) => {
  try {
    return await PreferenciaUsuario.destroy({ where: { usuario_id } });
  } catch (error) {
    throw new Error("Error al eliminar preferencias del usuario: " + error.message);
  }
};

// ----------------------------------------------
// Exportar servicios
// ----------------------------------------------
module.exports = {
  getAllPreference,
  getPreferencesByUser,
  getPreference,
  createOrUpdatePreference,
  updatePreference,
  deletePreference,
  deletePreferencesByUser,
};
