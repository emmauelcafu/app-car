const { Router } = require("express");
const { carHandler,userdataHandler } = require("../handler/carHandler");
const { postCarHandler } = require("../handler/postCarHandler");
const carRouter = Router();

carRouter.get("/", carHandler);
carRouter.get("/userdate", userdataHandler);

carRouter.post("/", postCarHandler);

module.exports = carRouter;
