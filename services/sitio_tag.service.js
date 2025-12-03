const SitioTag = require("../database/models/Sitio_Tag");
const SitioTuristico = require("../database/models/Sitios_Turisticos");
const Tag = require("../database/models/Tags");

// ----------------------------------------------
// Asociar un tag a un sitio
// ----------------------------------------------
const addTagToSitio = async (sitio_id, tag_id) => {
  try {
    // Validar existencia de sitio
    const sitio = await SitioTuristico.findByPk(sitio_id);
    if (!sitio) throw new Error("Sitio turístico no existe");

    // Validar existencia de tag
    const tag = await Tag.findByPk(tag_id);
    if (!tag) throw new Error("Tag no existe");

    // Crear relación
    const sitioTag = await SitioTag.create({ sitio_id, tag_id });
    return sitioTag;
  } catch (err) {
    throw new Error("Error al asociar tag al sitio: " + err.message);
  }
};

// ----------------------------------------------
// Desasociar un tag de un sitio
// ----------------------------------------------
const removeTagFromSitio = async (sitio_id, tag_id) => {
  try {
    const sitioTag = await SitioTag.findOne({ where: { sitio_id, tag_id } });
    if (!sitioTag) return false;

    await sitioTag.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al desasociar tag del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todos los tags de un sitio
// ----------------------------------------------
const getTagsBySitio = async (sitio_id) => {
  try {
    return await SitioTag.findAll({ where: { sitio_id } });
  } catch (err) {
    throw new Error("Error al obtener tags del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todos los sitios de un tag
// ----------------------------------------------
const getSitiosByTag = async (tag_id) => {
  try {
    return await SitioTag.findAll({ where: { tag_id } });
  } catch (err) {
    throw new Error("Error al obtener sitios del tag: " + err.message);
  }
};

module.exports = {
  addTagToSitio,
  removeTagFromSitio,
  getTagsBySitio,
  getSitiosByTag,
};
