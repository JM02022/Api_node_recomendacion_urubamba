const imagenService = require("../services/imagen.service");

// ----------------------------------------------
// Obtener todas las imágenes
// ----------------------------------------------
const getAllImagenes = async (req, res) => {
  try {
    const imagenes = await imagenService.getAllImagenes();
    res.json({ imagenes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener imágenes: " + err.message });
  }
};

// ----------------------------------------------
// Obtener imagen por ID
// ----------------------------------------------
const getImagenById = async (req, res) => {
  const { imagen_id } = req.params;

  try {
    const imagen = await imagenService.getImagenById(imagen_id);
    if (!imagen) return res.status(404).json({ message: "Imagen no encontrada" });

    res.json(imagen);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener imagen: " + err.message });
  }
};

// ----------------------------------------------
// Obtener todas las imágenes de un sitio
// ----------------------------------------------
const getImagenesBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const imagenes = await imagenService.getImagenesBySitio(sitio_id);
    res.json({ imagenes });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener imágenes del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Crear una nueva imagen
// ----------------------------------------------
const createImagen = async (req, res) => {
  try {
    const imagenData = req.body;

    if (!imagenData.sitio_id || !imagenData.url_imagen) {
      return res.status(400).json({ message: "sitio_id y url_imagen son requeridos" });
    }

    const imagen = await imagenService.createImagen(imagenData);
    res.status(201).json({ message: "Imagen creada correctamente", imagen });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear imagen: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar imagen
// ----------------------------------------------
const updateImagen = async (req, res) => {
  const { imagen_id } = req.params;
  const newData = req.body;

  try {
    const imagen = await imagenService.updateImagen(imagen_id, newData);

    if (!imagen) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    res.json({ message: "Imagen actualizada correctamente", imagen });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar imagen: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar imagen
// ----------------------------------------------
const deleteImagen = async (req, res) => {
  const { imagen_id } = req.params;

  try {
    const deleted = await imagenService.deleteImagen(imagen_id);

    if (!deleted) {
      return res.status(404).json({ message: "Imagen no encontrada" });
    }

    res.json({ message: "Imagen eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar imagen: " + err.message });
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
