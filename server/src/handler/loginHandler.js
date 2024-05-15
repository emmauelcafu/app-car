const Usuario = require("../model/login");
const jwt = require("jsonwebtoken");

const llavesecreta = "ojonadiedebesaber";

const loginHandler = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await Usuario.findOne({ where: { name: username } });

    if (!user) {
      return res.status(401).json({ msg: "Credenciales incorrectas" });
    }

    if (password === user.password) {
      jwt.sign(
        { username, password },
        llavesecreta,
        { expiresIn: "300s" },
        (err, token) => {
          if (err) {
            res.status(400).json({ msg: "Error al generar el token" });
          } else {
            res.json({ msg: "Inicio de sesión exitoso", token: token });

          }
        }
      );
    } else {
      res.status(401).json({ msg: "Credenciales incorrectas" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Error al iniciar sesión" });
  }
};

const registrarHandler = async (req, res) => {
  try {
    const { name, password, gmail } = req.body;

    const user = await Usuario.create({ name, password, gmail });
    res.json({ message: "Usuario creado", user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error al registro usuario" });
  }
};

const datoHandler = (req, res) => {
  jwt.verify(req.token, llavesecreta, (error, authData) => {
    if (error) {
      res.send("Tienes que autenticarte");
    } else {
      res.json({
        mensaje: "Post fue creado",
        authData: authData,
      });
    }
  });
};




module.exports = { loginHandler, registrarHandler, datoHandler, llavesecreta:llavesecreta};
