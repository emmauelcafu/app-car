const { Router } = require("express");
const { carHandler, userdataHandler } = require("../handler/carHandler");
const { postCarHandler } = require("../handler/postCarHandler");
const { validacionToken } = require("../middleware/token");
const { loginHandler,registrarHandler,datoHandler } = require("../handler/loginHandler");

const carRouter = Router();

carRouter.get("/",validacionToken, carHandler);
carRouter.get("/userdate",validacionToken, userdataHandler);

carRouter.post("/",validacionToken, postCarHandler);



carRouter.post("/login", loginHandler);
carRouter.post("/registrar",registrarHandler)
carRouter.get("/datos",validacionToken,datoHandler);


module.exports = carRouter;
