// src/api/pythonClient.js
//const axios = require("axios");
//const config = require("../config/environment");

/**
 * Llama al motor Python para obtener recomendaciones.
 * @param {Object} userPreferences - Preferencias del usuario
 * @returns {Array} - Lista de recomendaciones
 */
//const getRecommendations = async (userPreferences) => {
  //try {
    //const response = await axios.post(config.pythonApi.url, userPreferences, {
      //timeout: config.pythonApi.timeout,
    //});

    //return response.data; // retorna lo que envía Python
  //} catch (error) {
   // console.error("Error al llamar al motor Python:", error.message);
   // return { error: "No se pudo obtener recomendaciones" };
 // }
//};

//module.exports = {
 // getRecommendations,
//};
const axios = require("axios");

const getTestMessage = async () => {
  try {
    const response = await axios.get("http://localhost:5000/api/v1/test");
    return response.data;
  } catch (error) {
    console.error("Error al llamar a Python:", error.message);
    throw error;
  }
};

module.exports = { getTestMessage };

