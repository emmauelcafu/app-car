// db.js

const { Sequelize } = require("sequelize");

// Configurar la instancia de Sequelize
const sequelize = new Sequelize("postgres://postgres:admin@localhost:5432/carapp", {
  define: { // Define las opciones globales para todos los modelos
    // Agrega las opciones que necesites, como timestamps, etc.
  },
});

module.exports = sequelize;
