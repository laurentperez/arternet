var http = require('http');
http.createServer(function (req, res) {
	console.log(req.headers);
	var ua = req.headers['user-agent'];
	var host = req.headers['x-forwarded-for'];

	  res.writeHead(200, {'Content-Type': 'text/plain'});
	     res.end('Robotize My Stuff !\n' + ua + '\n' +host);
}).listen(1337, '127.0.0.1');

