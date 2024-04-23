// En el archivo movil.js
const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db"); // Importa la instancia de Sequelize
const User = require("./User"); // Importa el modelo User

class Movil extends Model {}

Movil.init(
  {
    img: { type: DataTypes.STRING },
    placa: { type: DataTypes.STRING },
    userId: { type: DataTypes.UUID, allowNull: false } // Define la columna userId
  },
  {
    sequelize,
    modelName: "Movil",
  }
);

// Definir la relación con el modelo User
Movil.belongsTo(User, { foreignKey: "userId" }); // Establece la relación con la columna userId

module.exports = Movil;
