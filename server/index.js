//pakage body-parser
var bodyParser = require('body-parser');

//goi database
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");
var io = require('socket.io').listen(server);
db = low(adapter);
db.defaults({ users: [] }).write();
module.export = db;







//goi aplication.route tu routes
var applicationRoute = require("./routes/application.route");


//goi express
var express = require("express");
const { response } = require("express");
var app = express();
const { isPrimitive } = require("util");

//socket.io lang nghe được người kết nối vào
//pagagke IO


//lang nghe port 3000:
var server = require("http").Server(app);
var port = 3000;
app.listen(port, function() {
    console.log('server listening on port' + port);
})

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

//use public
app.use(express.static("./public"));
//set file ejs  voi file views
app.set("view engine", "ejs");
app.set("views", "./views");
//use body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// tab application
app.use('/application', applicationRoute);

//tab index
app.get("/", function(req, res) {
    res.render("web/index"), {
        users: db.get('users').value(),
    };
});
app.get("/signin", function(req, res) {
    res.render("web/signin");
});
app.post("/signin", function(req, res) {

    db.get('users').push(req.body).write();
    res.redirect('/');
})