const categoriaService = require("../services/categoria.service");

// ----------------------------------------------
// Obtener todas las categorías
// ----------------------------------------------
const getAllCategorias = async (req, res) => {
  try {
    const categorias = await categoriaService.getAllCategorias();
    res.json({ categorias });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener categorías: " + err.message });
  }
};

// ----------------------------------------------
// Obtener categoría por ID
// ----------------------------------------------
const getCategoriaById = async (req, res) => {
  const { categoria_id } = req.params;

  try {
    const categoria = await categoriaService.getCategoriaById(categoria_id);

    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json(categoria);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener categoría: " + err.message });
  }
};

// ----------------------------------------------
// Crear una nueva categoría
// ----------------------------------------------
const createCategoria = async (req, res) => {
  try {
    const categoriaData = req.body;

    if (!categoriaData.nombre) {
      return res.status(400).json({ message: "El nombre de la categoría es requerido" });
    }

    const categoria = await categoriaService.createCategoria(categoriaData);
    res.status(201).json({ message: "Categoría creada", categoria });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear categoría: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar categoría
// ----------------------------------------------
const updateCategoria = async (req, res) => {
  const { categoria_id } = req.params;
  const newData = req.body;

  try {
    const categoria = await categoriaService.updateCategoria(categoria_id, newData);

    if (!categoria) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json({ message: "Categoría actualizada", categoria });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar categoría: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar categoría
// ----------------------------------------------
const deleteCategoria = async (req, res) => {
  const { categoria_id } = req.params;

  try {
    const deleted = await categoriaService.deleteCategoria(categoria_id);

    if (!deleted) {
      return res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.json({ message: "Categoría eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar categoría: " + err.message });
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};
