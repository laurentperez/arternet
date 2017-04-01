var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var os = require('os');
var ifaces = os.networkInterfaces();
var eth;
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
      return;
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      console.log(ifname + ':' + alias, iface.address);
    } else {
      // this interface has only one ipv4 adress
      console.log(ifname, iface.address);
      eth = iface.address;
    }
    ++alias;
  });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.set('view engine', 'ejs');
app.get('/', function(req, res){ 
 res.render('home',{core: eth});
});
app.use(express.static(__dirname + '/'));

var http = require('http').createServer(app)
var io = io.listen(http);
http.listen(process.env.PORT || 3000);


/*
app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
*/


io.on('connection', function(socket){
	console.log("connection:" + socket);
	socket.emit("hello","world");
  socket.on('c', function(msg){
    io.emit('c', msg);
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
