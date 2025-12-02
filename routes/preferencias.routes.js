const express = require("express");
const router = express.Router();
const preferenciasController = require("../controllers/preferencias.controller");

// Listar todas las preferencias
router.get("/", preferenciasController.getAllPreferences);

// Obtener preferencias por usuario
router.get("/:usuario_id", preferenciasController.getPreferencesByUser);

// Crear o actualizar preferencia
router.post("/", preferenciasController.createOrUpdatePreference);

module.exports = router;
