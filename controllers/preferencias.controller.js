const preferenciasService = require("../services/preferencias.service");

// --------------------------------------------------
// Obtener todas las preferencias
// --------------------------------------------------
const getAllPreferences = async (req, res) => {
  try {
    const prefs = await preferenciasService.getAllPreference();
    res.json({ prefs });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Obtener preferencias por usuario
// --------------------------------------------------
const getPreferencesByUser = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const prefs = await preferenciasService.getPreferencesByUser(usuario_id);
    res.json(prefs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Obtener una preferencia específica (usuario + categoría)
// --------------------------------------------------
const getPreference = async (req, res) => {
  try {
    const { usuario_id, categoria_id } = req.params;

    const pref = await preferenciasService.getPreference(usuario_id, categoria_id);

    if (!pref) {
      return res.status(404).json({ message: "Preferencia no encontrada" });
    }

    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Crear o actualizar preferencia (UPSET)
// --------------------------------------------------
const createOrUpdatePreference = async (req, res) => {
  try {
    const { usuario_id, categoria_id, nivel_interes } = req.body;

    if (!usuario_id || !categoria_id || nivel_interes === undefined) {
      return res.status(400).json({ message: "Datos incompletos" });
    }

    const pref = await preferenciasService.createOrUpdatePreference(
      usuario_id,
      categoria_id,
      nivel_interes
    );

    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Actualizar preferencia por ID
// --------------------------------------------------
const updatePreference = async (req, res) => {
  try {
    const { preferencia_id } = req.params;
    const data = req.body;

    const pref = await preferenciasService.updatePreference(preferencia_id, data);

    if (!pref) {
      return res.status(404).json({ message: "Preferencia no encontrada" });
    }

    res.json(pref);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Eliminar preferencia por ID
// --------------------------------------------------
const deletePreference = async (req, res) => {
  try {
    const { preferencia_id } = req.params;

    const deleted = await preferenciasService.deletePreference(preferencia_id);

    if (!deleted) {
      return res.status(404).json({ message: "Preferencia no encontrada" });
    }

    res.json({ message: "Preferencia eliminada" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// --------------------------------------------------
// Eliminar todas las preferencias de un usuario
// --------------------------------------------------
const deletePreferencesByUser = async (req, res) => {
  try {
    const { usuario_id } = req.params;

    const deletedCount = await preferenciasService.deletePreferencesByUser(usuario_id);

    res.json({
      message: `Se eliminaron ${deletedCount} preferencias del usuario.`,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  getAllPreferences,
  getPreferencesByUser,
  getPreference,
  createOrUpdatePreference,
  updatePreference,
  deletePreference,
  deletePreferencesByUser,
};
