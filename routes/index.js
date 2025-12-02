// src/routes/index.js
const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const preferenciasRoutes = require("./preferencias.routes");
const actividadesRoutes = require("./actividades.routes");

// Rutas agrupadas
router.use("/users", userRoutes);
router.use("/preferencias", preferenciasRoutes);
router.use("/actividades", actividadesRoutes);

module.exports = router; 
