const { Router } = require("express");
const carRouter = require("./carRouter");
const router = Router();
router.use("/",carRouter);
module.exports = router;
