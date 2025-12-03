const Analytics = require("../database/models/Analytics");
const SitioTuristico = require("../database/models/Sitios_Turisticos");

// ----------------------------------------------
// Obtener todos los registros de analytics
// ----------------------------------------------
const getAllAnalytics = async () => {
  try {
    return await Analytics.findAll();
  } catch (err) {
    throw new Error("Error al obtener analytics: " + err.message);
  }
};

// ----------------------------------------------
// Obtener analytics por sitio
// ----------------------------------------------
const getAnalyticsBySitio = async (sitio_id) => {
  try {
    return await Analytics.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener analytics del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear o actualizar analytics diario
// ----------------------------------------------
const createOrUpdateAnalytics = async (sitio_id, fecha = new Date()) => {
  try {
    // Validar existencia del sitio
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) throw new Error("Sitio turístico no existe");

    // Buscar registro existente para la fecha
    let analytics = await Analytics.findOne({ where: { sitio_id, fecha } });

    if (analytics) {
      // Si ya existe, simplemente retornarlo (o se pueden incrementar valores según necesidad)
      return analytics;
    } else {
      analytics = await Analytics.create({ sitio_id, fecha });
      return analytics;
    }
  } catch (err) {
    throw new Error("Error al crear o actualizar analytics: " + err.message);
  }
};

// ----------------------------------------------
// Incrementar visitas diarias
// ----------------------------------------------
const incrementVisitas = async (sitio_id, fecha = new Date()) => {
  try {
    const analytics = await createOrUpdateAnalytics(sitio_id, fecha);
    analytics.visitas_diarias += 1;
    await analytics.save();
    return analytics;
  } catch (err) {
    throw new Error("Error al incrementar visitas: " + err.message);
  }
};

// ----------------------------------------------
// Incrementar clicks de reserva
// ----------------------------------------------
const incrementClicksReserva = async (sitio_id, fecha = new Date()) => {
  try {
    const analytics = await createOrUpdateAnalytics(sitio_id, fecha);
    analytics.clicks_reserva += 1;
    await analytics.save();
    return analytics;
  } catch (err) {
    throw new Error("Error al incrementar clicks de reserva: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar un registro de analytics
// ----------------------------------------------
const deleteAnalytics = async (analytics_id) => {
  try {
    const analytics = await Analytics.findByPk(analytics_id);
    if (!analytics) return false;

    await analytics.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar analytics: " + err.message);
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
