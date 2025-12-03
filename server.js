// server.js
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routes = require("./routes/index");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Para leer JSON en solicitudes

// Rutas
app.use("/api_urubamba_recomendacion", routes);

// Puerto desde .env
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Servidor Node.js corriendo en el puerto ${PORT}`);
});
//ejecutar servidor: npm run dev