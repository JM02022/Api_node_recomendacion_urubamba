const express = require("express");
const router = express.Router();

const preferenciasController = require("../controllers/preferencias.controller");

// --------------------------------------------
// Rutas de Preferencias de Usuario
// --------------------------------------------

// Obtener todas las preferencias
router.get("/", preferenciasController.getAllPreferences);

// Obtener preferencias por usuario
router.get("/usuario/:usuario_id", preferenciasController.getPreferencesByUser);

// Obtener una preferencia específica (usuario + categoría)
router.get("/:usuario_id/:categoria_id", preferenciasController.getPreference);

// Crear o actualizar preferencia (UPSET)
router.post("/", preferenciasController.createOrUpdatePreference);

// Actualizar preferencia por ID
router.put("/:preferencia_id", preferenciasController.updatePreference);

// Eliminar una preferencia por ID
router.delete("/:preferencia_id", preferenciasController.deletePreference);

// Eliminar todas las preferencias de un usuario
router.delete("/usuario/:usuario_id", preferenciasController.deletePreferencesByUser);

module.exports = router;
