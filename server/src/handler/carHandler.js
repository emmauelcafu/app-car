const axios = require("axios");
const User = require("../model/User");
const Movil = require("../model/Movil");
const { carController } = require("../controller/carController");

const carHandler = async (req, res) => {
  try {
    const funci = await carController();
    res.status(200).json(funci);
  } catch (error) {
    console.error("error carHandler :", error);
    throw error;
  }
};

// peticion a la bd consultando todo los datos el point es http://localhost:3001/userdate
const userdataHandler = async (req, res) => {
   
  try {
    // se hace la solicitud desde movil y los datos guardados por user
    const users = await Movil.findAll({ include: User });
    res.json(users);
  } catch (error) {
    console.error('Error al obtener los datos de Users y sus móviles asociados:', error);
    res.status(500).json({ error: 'Error interno del servidor' });
  }
};


module.exports = { carHandler, userdataHandler };
