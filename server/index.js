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
var mangUser =['thetoan1995'];
//port 3000
server.listen(3000);
//thuc hien socket io
io.on("connection", function(socket) {
    console.log("Co người kết nối: " + socket.id);
    // var database=db.get('users').value();
    socket.on("client-send-User-name",function(data){
        console.log(data);
        if(mangUser.indexOf(data)>=0){
            //sign in fail
            socket.emit("server-send-signin-failed");
        }else{
            //sigin completted
            mangUser.push(data);
            socket.emit("server-send-sigin-completeted",data);
        }
       });
    socket.on("disconnect", function() {
        console.log("Ngắt kết nối: " + socket.id);
    });
  
});

//use body parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/application", applicationRoute);
app.get("/", function(req, res) {
    res.render("web/signin");
});
app.post("/", function(req, res) {
    console.log(req.body);
    db.get('users').push(req.body).write();
    res.render("web/signin");
    
})

