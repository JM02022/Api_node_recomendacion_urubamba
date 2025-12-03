const express = require("express");
const router = express.Router();
const analyticsController = require("../controllers/analytics.controller");

// --------------------------------------------
// Listar todos los registros de analytics
// --------------------------------------------
router.get("/", analyticsController.getAllAnalytics);

// --------------------------------------------
// Obtener analytics por sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", analyticsController.getAnalyticsBySitio);

// --------------------------------------------
// Crear o actualizar registro diario
// --------------------------------------------
router.post("/", analyticsController.createOrUpdateAnalytics);

// --------------------------------------------
// Incrementar visitas diarias
// --------------------------------------------
router.patch("/visitas/:sitio_id", analyticsController.incrementVisitas);

// --------------------------------------------
// Incrementar clicks de reserva
// --------------------------------------------
router.patch("/clicks/:sitio_id", analyticsController.incrementClicksReserva);

// --------------------------------------------
// Eliminar registro de analytics
// --------------------------------------------
router.delete("/:analytics_id", analyticsController.deleteAnalytics);

module.exports = router;
