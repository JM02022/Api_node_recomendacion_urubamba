const express = require("express");
const router = express.Router();
const tagsController = require("../controllers/tags.controller");

// --------------------------------------------
// Listar todos los tags
// --------------------------------------------
router.get("/", tagsController.getAllTags);

// --------------------------------------------
// Obtener tag por ID
// --------------------------------------------
router.get("/:tag_id", tagsController.getTagById);

// --------------------------------------------
// Crear un nuevo tag
// --------------------------------------------
router.post("/", tagsController.createTag);

// --------------------------------------------
// Actualizar tag
// --------------------------------------------
router.put("/:tag_id", tagsController.updateTag);

// --------------------------------------------
// Eliminar tag
// --------------------------------------------
router.delete("/:tag_id", tagsController.deleteTag);

module.exports = router;
