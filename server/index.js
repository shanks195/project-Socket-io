var express = require("express");
const { isPrimitive } = require("util");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

var server = require("http").Server(app);
var io = require("socket.io")(server);

server.listen(3000);
io.on("connection", function(socket) {
    console.log("Co người kết nối: " + socket.id);

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
app.get("/signin", function(req, res) {
    res.render("web/index");
})
app.get("/login", function(req, res) {
    res.render("web/index");
})
app.get("/", function(req, res) {
    res.render("web/index");
})