// src/config/environment.js
const dotenv = require("dotenv");

// Cargar variables desde .env
dotenv.config();

module.exports = {
  port: process.env.PORT || 4000, // Puerto del servidor

  db: {
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASS || "",
    database: process.env.DB_NAME || "turismo_urubamba",
    dialect: "mysql", // cambiar si usas PostgreSQL u otro
  },

  pythonApi: {
    url: process.env.PYTHON_API_URL || "http://localhost:5000/api/v1/recommend",
    timeout: 15000, // 15 segundos
  },

  jwt: {
    secret: process.env.JWT_SECRET || "secretkey", // para autenticación JWT
    expiresIn: process.env.JWT_EXPIRES || "1d",
  },
};
