var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/'));
var http = require('http').createServer(app)
var io = io.listen(http);
http.listen(3000);


/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/


io.on('connection', function(socket){
	console.log("connection:" + socket);
	socket.emit("hello","world");
  socket.on('coords', function(msg){
    io.emit('coords', msg);
  });

  socket.on("range", function(msg) {
  	console.log("range!");
  	io.emit("range", msg);
  })
});


// app.listen(process.env.PORT || 3000);

/*
http.listen(3000, function(){
  console.log('listening on *:3000');
});
*/
