// src/services/user.service.js
const Usuario = require("../database/models/Usuarios");

const loginUser = async (email, contrasena) => {
  const user = await Usuario.findOne({ where: { email } });

  if (!user) return null;
  if (user.contrasena !== contrasena) return null;

  return {
    usuario_id: user.usuario_id,
    nombre: user.nombre,
    email: user.email,
  };
};

module.exports = {
  loginUser,
};
