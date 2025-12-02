// src/controllers/user.controller.js
const userService = require("../services/user.service");

const login = async (req, res) => {
  const { email, contrasena } = req.body;

  try {
    const user = await userService.loginUser(email, contrasena);

    if (!user) {
      return res.status(401).json({ message: "Usuario o contraseña incorrectos" });
    }

    res.json({ message: "Login exitoso", user });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

module.exports = {
  login,
};
