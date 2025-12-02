// src/routes/actividades.routes.js
const express = require("express");
const router = express.Router();
const actividadesController = require("../controllers/actividades.controller");

// Listar todas las actividades
router.get("/", actividadesController.getAllActividades);

// Obtener una actividad por ID
router.get("/:sitio_id", actividadesController.getActividadById);

module.exports = router;
