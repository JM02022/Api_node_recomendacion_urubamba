const express = require("express");
const router = express.Router();
const resenasController = require("../controllers/resenias.controller");

// --------------------------------------------
// Listar todas las reseñas
// --------------------------------------------
router.get("/", resenasController.getAllResenas);

// --------------------------------------------
// Obtener reseña por ID
// --------------------------------------------
router.get("/:resenia_id", resenasController.getResenaById);

// --------------------------------------------
// Obtener reseñas por usuario
// --------------------------------------------
router.get("/usuario/:usuario_id", resenasController.getResenasByUsuario);

// --------------------------------------------
// Obtener reseñas por sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", resenasController.getResenasBySitio);

// --------------------------------------------
// Crear una nueva reseña
// --------------------------------------------
router.post("/", resenasController.createResena);

// --------------------------------------------
// Actualizar reseña
// --------------------------------------------
router.put("/:resenia_id", resenasController.updateResena);

// --------------------------------------------
// Eliminar reseña
// --------------------------------------------
router.delete("/:resenia_id", resenasController.deleteResena);

module.exports = router;
