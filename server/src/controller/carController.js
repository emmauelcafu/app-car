const axios = require("axios");
const Movil = require("../model/Movil");
const url = "https://jsonplaceholder.typicode.com/users";
const createCar = async (userId, img, placa) => {
  try {
    // Crea un nuevo registro de móvil en la base de datos asociado al userId
    const newCar = await Movil.create({ userId, img, placa });
    return newCar;
  } catch (error) {
    console.error("Error creating car:", error);
    throw error;
  }
};

const carController = async () => {
  try {
    console.log('estamos mira')
    const apidata = await axios.get(url);
    console.log(apidata);
    return apidata.data;
  } catch (error) {
    console.error("error carController :", error);
    throw error;
  } 
  
};

module.exports = { createCar,carController };
