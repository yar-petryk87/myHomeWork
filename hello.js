var http = require('http');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
  res.write('Hello World!!!');
  res.end();
}).listen(8080);
