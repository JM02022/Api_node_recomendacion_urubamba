// src/routes/actividades.routes.js
const express = require("express");
const router = express.Router();
const actividadesController = require("../controllers/sitios_turisticos.controller");

// --------------------------------------------
// Rutas de Sitios Turísticos / Actividades
// --------------------------------------------

// Listar todos los sitios
router.get("/", actividadesController.getAllActividades);

// Obtener un sitio por ID
router.get("/:sitio_id", actividadesController.getActividadById);

// Crear un nuevo sitio
router.post("/", actividadesController.createActividad);

// Actualizar un sitio
router.put("/:sitio_id", actividadesController.updateActividad);

// Eliminar un sitio
router.delete("/:sitio_id", actividadesController.deleteActividad);

module.exports = router;