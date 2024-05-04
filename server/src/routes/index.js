const { Router } = require("express");
const carRouter = require("./carRouter");
const loginRouter = require("./login");
const router = Router();
router.use("/", carRouter);
router.use("/", loginRouter);
module.exports = router;
