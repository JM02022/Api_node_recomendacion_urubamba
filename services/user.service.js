const Usuario = require("../database/models/Usuarios");
const bcrypt = require("bcrypt");

// ----------------------------------------------
// Registrar / Crear un nuevo usuario
// ----------------------------------------------
const createUser = async (userData) => {
  try {
    // Hash de contraseña
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(userData.contrasena, saltRounds);

    const user = await Usuario.create({
      ...userData,
      contrasena: hashedPassword,
    });

    return {
      usuario_id: user.usuario_id,
      nombre: user.nombre,
      email: user.email,
      fecha_nacimiento: user.fecha_nacimiento,
      genero: user.genero,
      pais_origen: user.pais_origen,
      idioma_preferido: user.idioma_preferido,
      fecha_registro: user.fecha_registro,
    };
  } catch (err) {
    throw new Error("Error al crear usuario: " + err.message);
  }
};

// ----------------------------------------------
// Login de usuario
// ----------------------------------------------
const loginUser = async (email, contrasena) => {
  try {
    // Buscar usuario por email
    const user = await Usuario.findOne({ where: { email } });
    if (!user) return null;

    // Comparar contraseñas en texto plano
    if (user.contrasena !== contrasena) {
      return null;
    }

    // Si las contraseñas coinciden, retornar el usuario
    return {
      usuario_id: user.usuario_id,
      nombre: user.nombre,
      email: user.email,
      fecha_nacimiento: user.fecha_nacimiento,
      genero: user.genero,
      pais_origen: user.pais_origen,
      idioma_preferido: user.idioma_preferido,
      fecha_registro: user.fecha_registro,
    };
  } catch (err) {
    throw new Error("Error en login: " + err.message);
  }
};

// ----------------------------------------------
// Obtener usuario por ID
// ----------------------------------------------
const getUserById = async (usuario_id) => {
  try {
    const user = await Usuario.findByPk(usuario_id, {
      attributes: { exclude: ["contrasena"] },
    });
    return user;
  } catch (err) {
    throw new Error("Error al obtener usuario: " + err.message);
  }
};

// ----------------------------------------------
// Actualizar usuario
// ----------------------------------------------
const updateUser = async (usuario_id, newData) => {
  try {
    const user = await Usuario.findByPk(usuario_id);
    if (!user) return null;

    // Si se actualiza la contraseña, hacer hash
    if (newData.contrasena) {
      const saltRounds = 10;
      newData.contrasena = await bcrypt.hash(newData.contrasena, saltRounds);
    }

    await user.update(newData);
    return user;
  } catch (err) {
    throw new Error("Error al actualizar usuario: " + err.message);
  }
};

// ----------------------------------------------
// Eliminar usuario
// ----------------------------------------------
const deleteUser = async (usuario_id) => {
  try {
    const user = await Usuario.findByPk(usuario_id);
    if (!user) return false;

    await user.destroy();
    return true;
  } catch (err) {
    throw new Error("Error al eliminar usuario: " + err.message);
  }
};

module.exports = {
  createUser,
  loginUser,
  getUserById,
  updateUser,
  deleteUser,
};
