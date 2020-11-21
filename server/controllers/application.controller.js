//goi database ra tu file db.js
var db = require("../db");
module.exports.pokedex = function(req, res) {
    res.render("web/application/pokedex/index");
}
module.exports.LoginchatRoom = function(req,res) {
    res.render("web/application/chatRoom/loginmessage");
}
module.exports.ChatRoomMessage =function(req,res) {
    res.render("web/application/chatRoom/chat");
}