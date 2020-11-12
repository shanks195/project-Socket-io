//goi database ra tu file db.js
var db = require("../db");
module.exports.pokedex = function(req, res) {
    res.render("web/application/pokedex/index");
}