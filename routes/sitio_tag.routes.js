const express = require("express");
const router = express.Router();
const sitioTagController = require("../controllers/sitio_tag.controller");

// --------------------------------------------
// Asociar un tag a un sitio
// --------------------------------------------
router.post("/", sitioTagController.addTagToSitio);

// --------------------------------------------
// Desasociar un tag de un sitio
// --------------------------------------------
router.delete("/:sitio_id/:tag_id", sitioTagController.removeTagFromSitio);

// --------------------------------------------
// Obtener todos los tags de un sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", sitioTagController.getTagsBySitio);

// --------------------------------------------
// Obtener todos los sitios de un tag
// --------------------------------------------
router.get("/tag/:tag_id", sitioTagController.getSitiosByTag);

module.exports = router;
