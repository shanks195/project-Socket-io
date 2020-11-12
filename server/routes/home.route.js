var express = require('express');
var router = express.Router();
module.exports = router;
var controllers = require("../controllers/home.controller");

//goi database ra tu file db.js
var db = require("../db");
//Trang home
router.get("/", controllers.index);