const tagsService = require("../services/tags.service");

// ----------------------------------------------
// Listar todos los tags
// ----------------------------------------------
const getAllTags = async (req, res) => {
  try {
    const tags = await tagsService.getAllTags();
    res.json({ tags });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener tags: " + err.message });
  }
};

// ----------------------------------------------
// Obtener tag por ID
// ----------------------------------------------
const getTagById = async (req, res) => {
  const { tag_id } = req.params;

  try {
    const tag = await tagsService.getTagById(tag_id);
    if (!tag) return res.status(404).json({ message: "Tag no encontrado" });

    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener tag: " + err.message });
  }
};

// ----------------------------------------------
// Crear un nuevo tag
// ----------------------------------------------
const createTag = async (req, res) => {
  try {
    const tagData = req.body;
    const tag = await tagsService.createTag(tagData);

    res.status(201).json({ message: "Tag creado correctamente", tag });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear tag: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar tag
// ----------------------------------------------
const updateTag = async (req, res) => {
  const { tag_id } = req.params;
  const newData = req.body;

  try {
    const tag = await tagsService.updateTag(tag_id, newData);
    if (!tag) return res.status(404).json({ message: "Tag no encontrado" });

    res.json({ message: "Tag actualizado correctamente", tag });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar tag: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar tag
// ----------------------------------------------
const deleteTag = async (req, res) => {
  const { tag_id } = req.params;

  try {
    const deleted = await tagsService.deleteTag(tag_id);
    if (!deleted) return res.status(404).json({ message: "Tag no encontrado" });

    res.json({ message: "Tag eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar tag: " + err.message });
  }
};

module.exports = {
  getAllTags,
  getTagById,
  createTag,
  updateTag,
  deleteTag,
};
