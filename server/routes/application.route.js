var express = require('express');
var router = express.Router();

var controllers = require("../controllers/application.controller");
//game pokedex
router.get("/game_pokedex", controllers.pokedex);
module.exports = router;