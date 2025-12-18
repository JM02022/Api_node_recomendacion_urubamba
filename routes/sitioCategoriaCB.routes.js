// src/routes/sitioCategoriaCB.routes.js
const express = require("express");
const router = express.Router();
const sitioCategoriaController = require("../controllers/sitioCategoriaCB.controller");

// --------------------------------------------
// Rutas de Sitio-Categoría
// --------------------------------------------

// Listar todas las relaciones
router.get("/", sitioCategoriaController.getAllSitioCategorias);

// Obtener categorías por sitio
router.get("/:sitio_id", sitioCategoriaController.getCategoriasBySitio);

// Crear nueva relación sitio-categoría
router.post("/", sitioCategoriaController.createSitioCategoria);

// Eliminar relación sitio-categoría
router.delete("/:sitio_id/:categoria_id", sitioCategoriaController.deleteSitioCategoria);

module.exports = router;
