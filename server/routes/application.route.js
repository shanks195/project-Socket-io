var express = require('express');
var router = express.Router();

var controllers = require("../controllers/application.controller");
//game pokedex
router.get("/game_pokedex", controllers.pokedex);
//ChatRoom
router.get("/loginchatroom",controllers.LoginchatRoom);
router.get("/chatroom",controllers.ChatRoomMessage);
module.exports = router;

