// src/routes/recomendaciones.routes.js
const express = require("express");
const router = express.Router();
const recomendacionesController = require("../controllers/recomendaciones.controller");

// --------------------------------------------
// Rutas de Recomendaciones
// --------------------------------------------

// Listar todas las recomendaciones
router.get("/", recomendacionesController.getAllRecomendaciones);

// Obtener recomendaciones de un usuario
router.get("/usuario/:usuario_id", recomendacionesController.getRecomendacionesByUser);

// Generar recomendaciones Content-Based para un usuario
router.post("/generar/:usuario_id", recomendacionesController.generateRecomendaciones);

// CRUD básico de recomendaciones
router.post("/", recomendacionesController.createRecomendacion);
router.put("/:recomendacion_id", recomendacionesController.updateRecomendacion);
router.delete("/:recomendacion_id", recomendacionesController.deleteRecomendacion);

module.exports = router;
