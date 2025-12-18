// src/routes/index.js
const express = require("express");
const router = express.Router();

const userRoutes = require("./user.routes");
const preferenciasRoutes = require("./preferencias.routes");
const actividadesRoutes = require("./sitios_turisticos.routes");
const categoriaRoutes = require("./categoria.routes");
const sitios_categeoriaRoutes = require("./sitio_categoria.routes");
const imagenRoutes = require("./imagen.routes");
const reseniaRoutes = require("./resenias.routes");
const historial_interaccionesRoutes = require("./historial_interacciones.routes");
const tagsRoutes = require("./tags.routes");
const sitioTagRoutes = require("./sitio_tag.routes");
const scoresRoutes = require("./scores.route");
const analyticsRoutes = require("./analytics.routes");
const recomendacionesRoutes = require("./recomendaciones.routes");
const sitioCategoriaCBRoutes = require("./sitioCategoriaCB.routes");
const sitioTagCBRoutes = require("./sitioTagCB.routes");

// Rutas agrupadas
router.use("/analytics", analyticsRoutes);
router.use("/scores", scoresRoutes);
router.use("/sitio_tags", sitioTagRoutes);
router.use("/tags", tagsRoutes);
router.use("/historial_interacciones", historial_interaccionesRoutes);
router.use("/resenias", reseniaRoutes);
router.use("/imagenes", imagenRoutes);
router.use("/categorias", categoriaRoutes);
router.use("/users", userRoutes);
router.use("/preferencias", preferenciasRoutes);
router.use("/sitios_turisticos", actividadesRoutes);
router.use("/sitios_categorias", sitios_categeoriaRoutes);

router.use("/recomendaciones", recomendacionesRoutes);
router.use("/sitios_categorias_cb", sitioCategoriaCBRoutes);
router.use("/sitios_tags_cb", sitioTagCBRoutes);

module.exports = router; 