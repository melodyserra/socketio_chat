var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  // res.send('<h1>Hello world</h1>');
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    // console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
  // socket.on("username", function (nickname){
  //   console.log("this user said their username was " + nickname);
  // });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});