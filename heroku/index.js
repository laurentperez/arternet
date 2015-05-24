var WebSocketServer = require("websocket").server
var http = require("http")
var express = require("express")
var app = express()
var port = process.env.PORT || 5000

app.use(express.static(__dirname + "/"))

var server = http.createServer(app)
server.listen(port)

var clients = [ ];

console.log("http server listening on %d", port)

var wss = new WebSocketServer({httpServer: server})
console.log("websocket server created")

wss.on("request", function(request){
	console.log("received request:" +  request);
	  var connection = request.accept(null, request.origin);
var index = clients.push(connection) - 1;

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
        	console.log("received msg:" + message.utf8Data);
            // process WebSocket message
            for (var i=0; i < clients.length; i++) {
                    clients[i].sendUTF(message.utf8Data);
                }
        }
    });

    connection.on('close', function(connection) {
        // close user connection
    });
});


