var http=require('http');

http.createServer(function (request,response) {
   response.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
   response.write('你好！')
    response.end()
}).listen(8801);
/*
* 还可以这样写哦
* var http = require("http");

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("Hello World");
  response.end();
}

http.createServer(onRequest).listen(8888);
* */