const express = require("express");
const router = require("./routes/index");
const bodyParser = require('body-parser');
const server = express();
const cors = require('cors');

server.use(cors());

// Configuración del middleware body-parser
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.use("/", router);

module.exports = server;
