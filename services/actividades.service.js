// src/services/actividades.service.js
const SitioTuristico = require("../database/models/Sitios_Turisticos");

const getAllSitios = async () => {
  return await SitioTuristico.findAll();
};

const getSitioById = async (sitio_id) => {
  return await SitioTuristico.findByPk(sitio_id);
};

module.exports = {
  getAllSitios,
  getSitioById,
};
