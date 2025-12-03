const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoria.controller");

// --------------------------------------------
// Rutas de Categorías
// --------------------------------------------

// Listar todas las categorías
router.get("/", categoriaController.getAllCategorias);

// Obtener categoría por ID
router.get("/:categoria_id", categoriaController.getCategoriaById);

// Crear nueva categoría
router.post("/", categoriaController.createCategoria);

// Actualizar categoría
router.put("/:categoria_id", categoriaController.updateCategoria);

// Eliminar categoría
router.delete("/:categoria_id", categoriaController.deleteCategoria);

module.exports = router;
