//pagagke express

var express = require("express");
const { response } = require("express");
var app = express();
const { isPrimitive } = require("util");
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

//pakage body-parser
var bodyParser = require('body-parser');
var server = require("http").Server(app);
//pagagke IO
var io = require("socket.io")(server);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

//lang nghe port 3000:
server.listen(3000);
//socket.io lang nghe được người kết nối vào
io.on("connection", function(socket) {
    console.log("Co người kết nối: " + socket.id);
    //socket.io lang nghe duoc người ngắt két nối
    socket.on("disconnect", function() {
        console.log("Ngắt kết nối: " + socket.id);
    });
    socket.on("Client-send-data", function(data) {
        console.log(socket.id + " Vừa gửi   " + data);
        //io.sockets.emit("Server-send-data", data + "888");
        //socket.emit("Server-send-data", data + "888");
        socket.broadcast.emit("Server-send-data", data + "888");
    });
});
//game
app.get("/application/game_pokedex", function(req, res) {
    res.render("web/application/pokedex/index");
});
// tab

app.get("/", function(req, res) {
    res.render("web/login");
});