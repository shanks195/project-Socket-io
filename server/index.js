//goi express
var express = require("express");

var app = express();

//goi database
var low = require("lowdb");
var FileSync = require("lowdb/adapters/FileSync");
var adapter = new FileSync("db.json");
var io = require('socket.io').listen(server);

//ChatUser
const formatMessage = require('./utils/messages');
const {
  userJoin,
  getCurrentUser,
  userLeave,
  getRoomUsers
} = require('./utils/users');
//title chatCord
const botName = 'ChatCord Bot';
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

// Run when client connects
io.on('connection', socket => {
    socket.on('joinRoom', ({ username, room }) => {
      const user = userJoin(socket.id, username, room);
  
      socket.join(user.room);
  
      // Welcome current user
      socket.emit('message', formatMessage(botName, 'Welcome to ChatCord!'));
  
      // Broadcast when a user connects
      socket.broadcast
        .to(user.room)
        .emit(
          'message',
          formatMessage(botName, `${user.username} has joined the chat`)
        );
  
      // Send users and room info
      io.to(user.room).emit('roomUsers', {
        room: user.room,
        users: getRoomUsers(user.room)
      });
    });
  
    // Listen for chatMessage
    socket.on('chatMessage', msg => {
      const user = getCurrentUser(socket.id);
  
      io.to(user.room).emit('message', formatMessage(user.username, msg));
    });
  
    // Runs when client disconnects
    socket.on('disconnect', () => {
      const user = userLeave(socket.id);
  
      if (user) {
        io.to(user.room).emit(
          'message',
          formatMessage(botName, `${user.username} has left the chat`)
        );
  
        // Send users and room info
        io.to(user.room).emit('roomUsers', {
          room: user.room,
          users: getRoomUsers(user.room)
        });
      }
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
    res.redirect('/login');
})
app.get("/", function(req, res) {
    res.render("web/login");
});
app.get("/home", function(req, res) {
    res.render("web/index");
});