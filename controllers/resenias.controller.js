const resenasService = require("../services/resenias.service");

// ----------------------------------------------
// Listar todas las reseñas
// ----------------------------------------------
const getAllResenas = async (req, res) => {
  try {
    const resenas = await resenasService.getAllResenas();
    res.json({ resenas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener reseñas: " + err.message });
  }
};

// ----------------------------------------------
// Obtener reseña por ID
// ----------------------------------------------
const getResenaById = async (req, res) => {
  const { resena_id } = req.params;

  try {
    const resena = await resenasService.getResenaById(resena_id);
    if (!resena) return res.status(404).json({ message: "Reseña no encontrada" });

    res.json(resena);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener reseña: " + err.message });
  }
};

// ----------------------------------------------
// Obtener reseñas por usuario
// ----------------------------------------------
const getResenasByUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const resenas = await resenasService.getResenasByUsuario(usuario_id);
    res.json({ resenas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener reseñas del usuario: " + err.message });
  }
};

// ----------------------------------------------
// Obtener reseñas por sitio
// ----------------------------------------------
const getResenasBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const resenas = await resenasService.getResenasBySitio(sitio_id);
    res.json({ resenas });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener reseñas del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Crear una nueva reseña
// ----------------------------------------------
const createResena = async (req, res) => {
  try {
    const resenaData = req.body;

    const resena = await resenasService.createResena(resenaData);
    res.status(201).json({ message: "Reseña creada correctamente", resena });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear reseña: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar una reseña
// ----------------------------------------------
const updateResena = async (req, res) => {
  const { resena_id } = req.params;
  const newData = req.body;

  try {
    const resena = await resenasService.updateResena(resena_id, newData);

    if (!resena) return res.status(404).json({ message: "Reseña no encontrada" });

    res.json({ message: "Reseña actualizada correctamente", resena });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar reseña: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar una reseña
// ----------------------------------------------
const deleteResena = async (req, res) => {
  const { resena_id } = req.params;

  try {
    const deleted = await resenasService.deleteResena(resena_id);

    if (!deleted) return res.status(404).json({ message: "Reseña no encontrada" });

    res.json({ message: "Reseña eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar reseña: " + err.message });
  }
};

module.exports = {
  getAllResenas,
  getResenaById,
  getResenasByUsuario,
  getResenasBySitio,
  createResena,
  updateResena,
  deleteResena,
};
