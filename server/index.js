//goi express
var express = require("express");
const { isPrimitive } = require("util");
var app = express();

//goi database
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");
var io = require('socket.io').listen(server);


//goi aplication.route tu routes
var applicationRoute = require("./routes/application.route");
//thưc hien database
db = low(adapter);
db.defaults({ users: [] }).write();
module.export = db;
//thuc hien express
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");
//goi http port 
var server = require("http").Server(app);
//goi socket io
var io = require("socket.io")(server);
//pakage body-parser
var bodyParser = require('body-parser');

//port 3000
server.listen(3000);
//thuc hien socket io
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

//use body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/application", applicationRoute);
app.get("/signin", function(req, res) {
    res.render("web/signin");
});
app.post("/signin", function(req, res) {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.redirect('/');
})
app.get("/login", function(req, res) {
    res.render("web/login");
});
app.get("/", function(req, res) {
    res.render("web/index");
});