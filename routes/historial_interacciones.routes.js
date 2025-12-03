const express = require("express");
const router = express.Router();
const historialController = require("../controllers/historial_interacciones.controller");

// --------------------------------------------
// Listar todas las interacciones
// --------------------------------------------
router.get("/", historialController.getAllInteracciones);

// --------------------------------------------
// Obtener interacción por ID
// --------------------------------------------
router.get("/:interaccion_id", historialController.getInteraccionById);

// --------------------------------------------
// Obtener interacciones por usuario
// --------------------------------------------
router.get("/usuario/:usuario_id", historialController.getInteraccionesByUsuario);

// --------------------------------------------
// Obtener interacciones por sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", historialController.getInteraccionesBySitio);

// --------------------------------------------
// Crear una nueva interacción
// --------------------------------------------
router.post("/", historialController.createInteraccion);

// --------------------------------------------
// Eliminar interacción
// --------------------------------------------
router.delete("/:interaccion_id", historialController.deleteInteraccion);

module.exports = router;
