//goi database ra tu file db.js
var db = require("../db");
module.exports.index = function(req, res) {
    res.render("web/index", {
        users: db.get('users').value(),
    });
}