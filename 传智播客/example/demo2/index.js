var http=require('http');
var fs=require('fs');
http.createServer(function (req,res) {
   if(req.url=='/'){
       res.writeHead(200,{'Content-Type':"text/html;charset=UTF8"});
       res.end('<h1>欢迎回来！</h1>')
   }else {
       res.writeHead(200,{'Content-Type':'text/html;charset=UTF8'});
       res.end('<h1>404</h1>')
   }
}).listen('8888','127.0.0.1');

console.log('ok');