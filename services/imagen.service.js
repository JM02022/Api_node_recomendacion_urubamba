const Imagen = require("../database/models/Imagenes");

// ----------------------------------------------
// Obtener todas las imágenes
// ----------------------------------------------
const getAllImagenes = async () => {
  try {
    return await Imagen.findAll();
  } catch (err) {
    throw new Error("Error al obtener imágenes: " + err.message);
  }
};

// ----------------------------------------------
// Obtener imagen por ID
// ----------------------------------------------
const getImagenById = async (imagen_id) => {
  try {
    return await Imagen.findByPk(imagen_id);
  } catch (err) {
    throw new Error("Error al obtener la imagen: " + err.message);
  }
};

// ----------------------------------------------
// Obtener todas las imágenes de un sitio
// ----------------------------------------------
const getImagenesBySitio = async (sitio_id) => {
  try {
    return await Imagen.findAll({ where: { sitio_id }, order: [["orden", "ASC"]] });
  } catch (err) {
    throw new Error("Error al obtener imágenes del sitio: " + err.message);
  }
};

// ----------------------------------------------
// Crear una nueva imagen
// ----------------------------------------------
const createImagen = async (imagenData) => {
  try {
    const imagen = await Imagen.create(imagenData);
    return imagen;
  } catch (err) {
    throw new Error("Error al crear imagen: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar una imagen
// ----------------------------------------------
const updateImagen = async (imagen_id, newData) => {
  try {
    const imagen = await Imagen.findByPk(imagen_id);
    if (!imagen) return null;

    await imagen.update(newData);
    return imagen;
  } catch (err) {
    throw new Error("Error al actualizar imagen: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar una imagen
// ----------------------------------------------
const deleteImagen = async (imagen_id) => {
  try {
    const imagen = await Imagen.findByPk(imagen_id);
    if (!imagen) return false;

    await imagen.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar imagen: " + err.message);
  }
};

module.exports = {
  getAllImagenes,
  getImagenById,
  getImagenesBySitio,
  createImagen,
  updateImagen,
  deleteImagen,
};
