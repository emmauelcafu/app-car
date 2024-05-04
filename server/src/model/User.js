const { DataTypes, Model } = require("sequelize");
const sequelize = require("../db"); // Importa la instancia de Sequelize

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    nombre: { type: DataTypes.STRING },
    apellido: { type: DataTypes.STRING },
    cedula: { type: DataTypes.STRING },
    correo: { type: DataTypes.STRING },
    telefono: { type: DataTypes.STRING },
    telFijo: { type: DataTypes.STRING },
    cedulaTitular: { type: DataTypes.STRING },
    img: { type: DataTypes.STRING },
    
  },
  {
    sequelize,
    modelName: "User",
  }
);

module.exports = User;
