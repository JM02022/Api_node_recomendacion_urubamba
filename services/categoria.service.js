const Categoria = require("../database/models/Categorias");

// ----------------------------------------------
// Obtener todas las categorías
// ----------------------------------------------
const getAllCategorias = async () => {
  try {
    return await Categoria.findAll();
  } catch (err) {
    throw new Error("Error al obtener categorías: " + err.message);
  }
};

// ----------------------------------------------
// Obtener categoría por ID
// ----------------------------------------------
const getCategoriaById = async (categoria_id) => {
  try {
    return await Categoria.findByPk(categoria_id);
  } catch (err) {
    throw new Error("Error al obtener la categoría: " + err.message);
  }
};

// ----------------------------------------------
// Crear una nueva categoría
// ----------------------------------------------
const createCategoria = async (categoriaData) => {
  try {
    const categoria = await Categoria.create(categoriaData);
    return categoria;
  } catch (err) {
    throw new Error("Error al crear categoría: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar una categoría
// ----------------------------------------------
const updateCategoria = async (categoria_id, newData) => {
  try {
    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) return null;

    await categoria.update(newData);
    return categoria;
  } catch (err) {
    throw new Error("Error al actualizar categoría: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar una categoría
// ----------------------------------------------
const deleteCategoria = async (categoria_id) => {
  try {
    const categoria = await Categoria.findByPk(categoria_id);
    if (!categoria) return false;

    await categoria.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar categoría: " + err.message);
  }
};

module.exports = {
  getAllCategorias,
  getCategoriaById,
  createCategoria,
  updateCategoria,
  deleteCategoria,
};
