// src/controllers/actividades.controller.js
const actividadesService = require("../services/actividades.service");
const python1 = require("../api/pythonClient");//saca esto

const getAllActividades = async (req, res) => {
  try {
    //const sitios = await actividadesService.getAllSitios();
    const sitios = await python1.getTestMessage();//saca esto prueba de conexion con python
    res.json({ sitios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

const getActividadById = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const sitio = await actividadesService.getSitioById(sitio_id);
    if (!sitio) {
      return res.status(404).json({ message: "Sitio no encontrado" });
    }
    res.json({ sitio });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  getAllActividades,
  getActividadById,
};
