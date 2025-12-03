const sitioTagService = require("../services/sitio_tag.service");

// ----------------------------------------------
// Asociar un tag a un sitio
// ----------------------------------------------
const addTagToSitio = async (req, res) => {
  const { sitio_id, tag_id } = req.body;

  try {
    const sitioTag = await sitioTagService.addTagToSitio(sitio_id, tag_id);
    res.status(201).json({ message: "Tag asociado correctamente al sitio", sitioTag });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al asociar tag al sitio: " + err.message });
  }
};

// ----------------------------------------------
// Desasociar un tag de un sitio
// ----------------------------------------------
const removeTagFromSitio = async (req, res) => {
  const { sitio_id, tag_id } = req.params;

  try {
    const deleted = await sitioTagService.removeTagFromSitio(sitio_id, tag_id);
    if (!deleted) return res.status(404).json({ message: "Asociación no encontrada" });

    res.json({ message: "Tag desasociado correctamente del sitio" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al desasociar tag del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Obtener todos los tags de un sitio
// ----------------------------------------------
const getTagsBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const tags = await sitioTagService.getTagsBySitio(sitio_id);
    res.json({ tags });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener tags del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Obtener todos los sitios de un tag
// ----------------------------------------------
const getSitiosByTag = async (req, res) => {
  const { tag_id } = req.params;

  try {
    const sitios = await sitioTagService.getSitiosByTag(tag_id);
    res.json({ sitios });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener sitios del tag: " + err.message });
  }
};

module.exports = {
  addTagToSitio,
  removeTagFromSitio,
  getTagsBySitio,
  getSitiosByTag,
};
