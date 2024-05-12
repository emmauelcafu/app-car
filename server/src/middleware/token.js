const jwt = require("jsonwebtoken");
const { llavesecreta } = require("../handler/loginHandler");

function validacionToken(req, res, next) {
  const bearerHeader = req.headers["authorization"];

  if (typeof bearerHeader !== "undefined") {
    const token = bearerHeader.split(" ")[1];
    jwt.verify(token, llavesecreta, (err, decoded) => {
      if (err) {
        res.status(403).json({ msg: "Acceso no autorizado" });
      } else {
        req.token = token;
        next();
        
      }
    });
  } else {
    res.status(403).json({ msg: "Acceso no autorizado" });
  }
}

module.exports = { validacionToken };
