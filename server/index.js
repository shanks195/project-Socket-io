const { response } = require("express");
var express = require("express");
const { isPrimitive } = require("util");
//pagagke express
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");
var router = express.Router();

//
var bodyParser = require('body-parser');
var server = require("http").Server(app);
//pagagke IO
var io = require("socket.io")(server);
//pagagke database low
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
const adapter = new FileSync("db.json");

db = low(adapter);
db.defaults({ users: [] }).write();

var users = [
    { id: 1, firstName: 'Nguyen', lastName: 'Toan', email: 'robocon87@gmail.com', phone: '0902343342', date: '11/12/1995', sex: 'male', username: 'totoan1995', password: 'T@an1995' },
    { id: 2, firstName: 'Pham', lastName: 'Dinh', email: 'phamthanhdinh1996@gmail.com', phone: '09345323422', date: '31/05/1995', sex: 'male', username: 'thanhdinh1995', password: 'dinh@1995' },
    { id: 3, firstName: 'Pham', lastName: 'Dinh', email: 'phamthanhdinh1996@gmail.com', phone: '09345323422', date: '31/05/1995', sex: 'male', username: 'phantrang2000', password: 'trang@2000' },
    { id: 4, firstName: 'Pham', lastName: 'Dinh', email: 'phamthanhdinh1996@gmail.com', phone: '09345323422', date: '31/05/1995', sex: 'male', username: 'trucphuong1996', password: 'trucphuong@1996' }

];




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

app.get("/signin", function(req, res) {
    res.render("web/signin");
});
app.post("/signin", function(req, res) {
    db.get('users').push(req.body).write();
    res.redirect('/home');
})

app.get("/home", function(req, res) {
    res.render("web/index"), {
        users: db.get('users').value(),
    };
});
app.get("/", function(req, res) {
    res.render("web/login");
});