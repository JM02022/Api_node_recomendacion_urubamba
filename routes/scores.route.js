const express = require("express");
const router = express.Router();
const scoresController = require("../controllers/scores.controller");

// --------------------------------------------
// Listar todos los scores
// --------------------------------------------
router.get("/", scoresController.getAllScores);

// --------------------------------------------
// Obtener scores por usuario
// --------------------------------------------
router.get("/usuario/:usuario_id", scoresController.getScoresByUsuario);

// --------------------------------------------
// Obtener scores por sitio
// --------------------------------------------
router.get("/sitio/:sitio_id", scoresController.getScoresBySitio);

// --------------------------------------------
// Crear o actualizar score
// --------------------------------------------
router.post("/", scoresController.createOrUpdateScore);

// --------------------------------------------
// Eliminar score
// --------------------------------------------
router.delete("/:score_id", scoresController.deleteScore);

module.exports = router;
