const preferenciasService = require("../services/preferencias.service");

const getAllPreferences = async (req, res) => {
  try {
    const prefs = await preferenciasService.getAllPreference();
    res.json({ prefs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getPreferencesByUser = async (req, res) => {
  try {
    const { usuario_id } = req.params;
    const prefs = await preferenciasService.getPreferencesByUser(usuario_id);
    res.json(prefs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createOrUpdatePreference = async (req, res) => {
  try {
    const { usuario_id, categoria_id, nivel_interes } = req.body;
    const pref = await preferenciasService.createOrUpdatePreference(usuario_id, categoria_id, nivel_interes);
    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPreferences,
  getPreferencesByUser,
  createOrUpdatePreference,
};
