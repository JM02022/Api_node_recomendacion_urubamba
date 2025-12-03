const historialService = require("../services/historial_interacciones.service");

// ----------------------------------------------
// Listar todas las interacciones
// ----------------------------------------------
const getAllInteracciones = async (req, res) => {
  try {
    const interacciones = await historialService.getAllInteracciones();
    res.json({ interacciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener interacciones: " + err.message });
  }
};

// ----------------------------------------------
// Obtener interacción por ID
// ----------------------------------------------
const getInteraccionById = async (req, res) => {
  const { interaccion_id } = req.params;

  try {
    const interaccion = await historialService.getInteraccionById(interaccion_id);
    if (!interaccion) return res.status(404).json({ message: "Interacción no encontrada" });

    res.json(interaccion);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener interacción: " + err.message });
  }
};

// ----------------------------------------------
// Obtener interacciones por usuario
// ----------------------------------------------
const getInteraccionesByUsuario = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const interacciones = await historialService.getInteraccionesByUsuario(usuario_id);
    res.json({ interacciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener interacciones del usuario: " + err.message });
  }
};

// ----------------------------------------------
// Obtener interacciones por sitio
// ----------------------------------------------
const getInteraccionesBySitio = async (req, res) => {
  const { sitio_id } = req.params;

  try {
    const interacciones = await historialService.getInteraccionesBySitio(sitio_id);
    res.json({ interacciones });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener interacciones del sitio: " + err.message });
  }
};

// ----------------------------------------------
// Crear nueva interacción
// ----------------------------------------------
const createInteraccion = async (req, res) => {
  try {
    const interaccionData = req.body;
    const interaccion = await historialService.createInteraccion(interaccionData);

    res.status(201).json({ message: "Interacción creada correctamente", interaccion });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear interacción: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar interacción
// ----------------------------------------------
const deleteInteraccion = async (req, res) => {
  const { interaccion_id } = req.params;

  try {
    const deleted = await historialService.deleteInteraccion(interaccion_id);

    if (!deleted) return res.status(404).json({ message: "Interacción no encontrada" });

    res.json({ message: "Interacción eliminada correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar interacción: " + err.message });
  }
};

module.exports = {
  getAllInteracciones,
  getInteraccionById,
  getInteraccionesByUsuario,
  getInteraccionesBySitio,
  createInteraccion,
  deleteInteraccion,
};
