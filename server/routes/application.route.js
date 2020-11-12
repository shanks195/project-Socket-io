var express = require('express');
var router = express.Router();

//goi database
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");

db = low(adapter);
db.defaults({ users: [] }).write();

// //goi database ra tu file db.js
// var db = require("../db");
var controllers = require("../controllers/application.controller");
//game pokedex
router.get("/game_pokedex", controllers.pokedex);
module.exports = router;