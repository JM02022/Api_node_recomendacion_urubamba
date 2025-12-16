const userService = require("../services/user.service");

// ----------------------------------------------
// Login de usuario
// ----------------------------------------------
const login = async (req, res) => {
  const { email, contrasena } = req.body;
  if (!email || !contrasena) {
    return res.status(400).json({ message: "Email y contraseña son requeridos" });
  }

  try {
    const user = await userService.loginUser(email, contrasena);
    if (!user) {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    res.json({ message: "Login exitoso", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor: " + err.message });
  }
};

// ----------------------------------------------
// Registrar / Crear un nuevo usuario
// ----------------------------------------------
const register = async (req, res) => {
  try {
    const userData = req.body;

    if (!userData.email || !userData.contrasena || !userData.nombre) {
      return res.status(400).json({ message: "Nombre, email y contraseña son requeridos" });
    }

    const newUser = await userService.createUser(userData);
    res.status(201).json({ message: "Usuario creado exitosamente", user: newUser });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al crear usuario: " + err.message });
  }
};

// ----------------------------------------------
// Obtener usuario por ID
// ----------------------------------------------
const getUserById = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const user = await userService.getUserById(usuario_id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al obtener usuario: " + err.message });
  }
};

// ----------------------------------------------
// Actualizar usuario
// ----------------------------------------------
const updateUser = async (req, res) => {
  const { usuario_id } = req.params;
  const newData = req.body;

  try {
    const user = await userService.updateUser(usuario_id, newData);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario actualizado exitosamente", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al actualizar usuario: " + err.message });
  }
};

// ----------------------------------------------
// Eliminar usuario
// ----------------------------------------------
const deleteUser = async (req, res) => {
  const { usuario_id } = req.params;

  try {
    const deleted = await userService.deleteUser(usuario_id);

    if (!deleted) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({ message: "Usuario eliminado correctamente" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error al eliminar usuario: " + err.message });
  }
};

module.exports = {
  login,
  register,
  getUserById,
  updateUser,
  deleteUser,
};
