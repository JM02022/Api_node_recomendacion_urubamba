const analyticsService = require("../services/analytics.service");

// ----------------------------------------------
// Listar todos los registros de analytics
// ----------------------------------------------
const getAllAnalytics = async (req, res) => {
  try {
    const analytics = await analyticsService.getAllAnalytics();
    res.json({ analytics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener analytics: " + err.message });
  }
};

// ----------------------------------------------
// Obtener analytics por sitio
// ----------------------------------------------
const getAnalyticsBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const analytics = await analyticsService.getAnalyticsBySitio(sitio_id);
    res.json({ analytics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener analytics del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Crear o actualizar registro diario
// ----------------------------------------------
const createOrUpdateAnalytics = async (req, res) => {
  const { sitio_id, fecha } = req.body;

  try {
    const analytics = await analyticsService.createOrUpdateAnalytics(sitio_id, fecha);
    res.status(201).json({ message: "Registro de analytics creado/actualizado correctamente", analytics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear o actualizar analytics: " + err.message });
  }
};

// ----------------------------------------------
// Incrementar visitas diarias
// ----------------------------------------------
const incrementVisitas = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const analytics = await analyticsService.incrementVisitas(sitio_id);
    res.json({ message: "Visitas incrementadas correctamente", analytics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al incrementar visitas: " + err.message });
  }
};

// ----------------------------------------------
// Incrementar clicks de reserva
// ----------------------------------------------
const incrementClicksReserva = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const analytics = await analyticsService.incrementClicksReserva(sitio_id);
    res.json({ message: "Clicks de reserva incrementados correctamente", analytics });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al incrementar clicks de reserva: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar registro
// ----------------------------------------------
const deleteAnalytics = async (req, res) => {
  const { analytics_id } = req.params;

  try {
    const deleted = await analyticsService.deleteAnalytics(analytics_id);
    if (!deleted) return res.status(404).json({ message: "Registro de analytics no encontrado" });

    res.json({ message: "Registro de analytics eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar analytics: " + err.message });
  }
};

module.exports = {
  getAllAnalytics,
  getAnalyticsBySitio,
  createOrUpdateAnalytics,
  incrementVisitas,
  incrementClicksReserva,
  deleteAnalytics,
};
