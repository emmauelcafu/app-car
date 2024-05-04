const { Router } = require("express");
const { loginHandler,registrarHandler,datoHandler } = require("../handler/loginHandler");
const {validacionToken}=require("../middleware/token");
const loginRouter = Router();

loginRouter.post("/login", loginHandler);
loginRouter.post("/registrar",registrarHandler)
loginRouter.get("/datos",validacionToken,datoHandler);


module.exports = loginRouter;
