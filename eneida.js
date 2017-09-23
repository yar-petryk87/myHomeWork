var http = require('http');

http.createServer(function (req, res) {
  
  res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8' });
  res.write('Він швидко поробивши човни, <br> на синє море поспускав,');
  res.end();
}).listen(8080);