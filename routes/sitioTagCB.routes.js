// src/routes/sitioTagCB.routes.js
const express = require("express");
const router = express.Router();
const sitioTagController = require("../controllers/sitioTagCB.controller");

// --------------------------------------------
// Rutas de Sitio-Tag
// --------------------------------------------

// Listar todos los tags de sitios
router.get("/", sitioTagController.getAllSitioTags);

// Obtener tags por sitio
router.get("/:sitio_id", sitioTagController.getTagsBySitio);

// Crear nueva relación sitio-tag
router.post("/", sitioTagController.createSitioTag);

// Eliminar relación sitio-tag
router.delete("/:sitio_id/:tag_id", sitioTagController.deleteSitioTag);

module.exports = router;
