const express = require("express");
const router = express.Router();
const sitioCategoriaController = require("../controllers/sitio_categoria.controller");

// --------------------------------------------
// Asignar categoría a un sitio
// --------------------------------------------
router.post("/", sitioCategoriaController.addCategoriaToSitio);

// --------------------------------------------
// Quitar categoría de un sitio
// --------------------------------------------
router.delete("/:sitio_id/:categoria_id", sitioCategoriaController.removeCategoriaFromSitio);

// --------------------------------------------
// Obtener todas las categorías de un sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", sitioCategoriaController.getCategoriasBySitio);

// --------------------------------------------
// Obtener todos los sitios de una categoría
// --------------------------------------------
router.get("/categoria/:categoria_id", sitioCategoriaController.getSitiosByCategoria);

module.exports = router;
