const { Router } = require("express");
const { carHandler, userdataHandler } = require("../handler/carHandler");
const { postCarHandler } = require("../handler/postCarHandler");
const { validacionToken } = require("../middleware/token");
const carRouter = Router();

carRouter.get("/", validacionToken, carHandler);
carRouter.get("/userdate", validacionToken, userdataHandler);

carRouter.post("/", validacionToken, postCarHandler);

module.exports = carRouter;
