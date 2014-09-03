var http = require('http');
var send = require('send');

var port = Number(process.env.PORT || 6001);
console.log('listening on port ' + port);

var app = http.createServer(function(req, res) {
    'use strict';
    
    // your custom error-handling logic:
    function error(err) {
        res.statusCode = err.status || 500;
        res.end(err.message);
    }
    
    // your custom directory handling logic:
    function redirect() {
        res.statusCode = 301;
        res.setHeader('Location', req.url + '/');
        res.end('Redirecting to ' + req.url + '/');
    }
    
    send(req, req.url)
    .root(__dirname + '/dist')
    .on('error', error)
    .on('directory', redirect)
    .pipe(res);
}).listen(port);