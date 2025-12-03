const sitioCategoriaService = require("../services/sitio_categoria.service");

// ----------------------------------------------
// Asignar una categoría a un sitio
// ----------------------------------------------
const addCategoriaToSitio = async (req, res) => {
  const { sitio_id, categoria_id } = req.body;

  if (!sitio_id || !categoria_id) {
    return res.status(400).json({ message: "sitio_id y categoria_id son requeridos" });
  }

  try {
    const result = await sitioCategoriaService.addCategoriaToSitio(sitio_id, categoria_id);
    res.status(201).json({ message: "Categoría asignada al sitio correctamente", result });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al asignar categoría: " + err.message });
  }
};

// ----------------------------------------------
// Quitar una categoría de un sitio
// ----------------------------------------------
const removeCategoriaFromSitio = async (req, res) => {
  const { sitio_id, categoria_id } = req.params;

  try {
    const deleted = await sitioCategoriaService.removeCategoriaFromSitio(sitio_id, categoria_id);

    if (!deleted) {
      return res.status(404).json({ message: "Relación no encontrada" });
    }

    res.json({ message: "Categoría eliminada del sitio correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar categoría: " + err.message });
  }
};

// ----------------------------------------------
// Obtener todas las categorías de un sitio
// ----------------------------------------------
const getCategoriasBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const categorias = await sitioCategoriaService.getCategoriasBySitio(sitio_id);
    res.json({ categorias });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener categorías del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Obtener todos los sitios de una categoría
// ----------------------------------------------
const getSitiosByCategoria = async (req, res) => {
  const { categoria_id } = req.params;

  try {
    const sitios = await sitioCategoriaService.getSitiosByCategoria(categoria_id);
    res.json({ sitios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener sitios de la categoría: " + err.message });
  }
};

module.exports = {
  addCategoriaToSitio,
  removeCategoriaFromSitio,
  getCategoriasBySitio,
  getSitiosByCategoria,
};
