const User = require('../model/User');
const { createCar } = require('../controller/carController');
const { validacionToken } = require('../middleware/token'); // Importa el middleware de validación del token

const postCarHandler = async (req, res) => {
  console.log(req);
    const { nombre, apellido, cedula, correo, telFijo, cedulaTitular, img, placa } = req.body;
    console.log(nombre, apellido, cedula, correo, telFijo, cedulaTitular, img, placa)

    if (!nombre || !apellido || !cedula || !correo || !telFijo || !cedulaTitular || !img || !placa) {
      return res.status(400).json({ error: "Todos los campos son obligatorios" });
    }

    try {
      // Crea un nuevo usuario en la base de datos
      const newUser = await User.create({ nombre, apellido, cedula, correo, telFijo, cedulaTitular, img });

      // Crea un nuevo móvil asociado al usuario
      const newCar = await createCar(newUser.id, img, placa);

      // Responde con los datos del usuario y del móvil creado  
      res.status(200).json({ user: newUser, car: newCar });
    } catch (error) {
      // Responde con un mensaje de error si ocurre algún problema
      res.status(400).json({ error: error.message });
    }
};

module.exports = { postCarHandler };






  