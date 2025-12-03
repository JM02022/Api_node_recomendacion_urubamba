const Tag = require("../database/models/Tags");

// ----------------------------------------------
// Obtener todos los tags
// ----------------------------------------------
const getAllTags = async () => {
  try {
    return await Tag.findAll();
  } catch (err) {
    throw new Error("Error al obtener tags: " + err.message);
  }
};

// ----------------------------------------------
// Obtener tag por ID
// ----------------------------------------------
const getTagById = async (tag_id) => {
  try {
    return await Tag.findByPk(tag_id);
  } catch (err) {
    throw new Error("Error al obtener tag: " + err.message);
  }
};

// ----------------------------------------------
// Crear un nuevo tag
// ----------------------------------------------
const createTag = async (tagData) => {
  try {
    if (!tagData.nombre_tag) {
      throw new Error("nombre_tag es requerido");
    }

    const tag = await Tag.create(tagData);
    return tag;
  } catch (err) {
    throw new Error("Error al crear tag: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar tag
// ----------------------------------------------
const updateTag = async (tag_id, newData) => {
  try {
    const tag = await Tag.findByPk(tag_id);
    if (!tag) return null;

    await tag.update(newData);
    return tag;
  } catch (err) {
    throw new Error("Error al actualizar tag: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar tag
// ----------------------------------------------
const deleteTag = async (tag_id) => {
  try {
    const tag = await Tag.findByPk(tag_id);
    if (!tag) return false;

    await tag.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar tag: " + err.message);
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
