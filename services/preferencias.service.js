// src/services/preferencias.service.js
const PreferenciaUsuario = require("../database/models/Preferencias_Usuario");


const getAllPreference = async () => {
  return await PreferenciaUsuario.findAll();
};

const getPreferencesByUser = async (usuario_id) => {
  return await PreferenciaUsuario.findAll({ where: { usuario_id } });
};

const createOrUpdatePreference = async (usuario_id, categoria_id, nivel_interes) => {
  const pref = await PreferenciaUsuario.findOne({ where: { usuario_id, categoria_id } });

  if (pref) {
    pref.nivel_interes = nivel_interes;
    await pref.save();
    return pref;
  } else {
    return await PreferenciaUsuario.create({ usuario_id, categoria_id, nivel_interes });
  }
};

module.exports = {
  getPreferencesByUser,
  getAllPreference,
  createOrUpdatePreference,
};
