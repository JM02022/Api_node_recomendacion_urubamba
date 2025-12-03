const express = require("express");
const router = express.Router();
const imagenController = require("../controllers/imagen.controller");

// --------------------------------------------
// Listar todas las imágenes
// --------------------------------------------
router.get("/", imagenController.getAllImagenes);

// --------------------------------------------
// Obtener imagen por ID
// --------------------------------------------
router.get("/:imagen_id", imagenController.getImagenById);

// --------------------------------------------
// Obtener todas las imágenes de un sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", imagenController.getImagenesBySitio);

// --------------------------------------------
// Crear una nueva imagen
// --------------------------------------------
router.post("/", imagenController.createImagen);

// --------------------------------------------
// Actualizar imagen
// --------------------------------------------
router.put("/:imagen_id", imagenController.updateImagen);

// --------------------------------------------
// Eliminar imagen
// --------------------------------------------
router.delete("/:imagen_id", imagenController.deleteImagen);

module.exports = router;
