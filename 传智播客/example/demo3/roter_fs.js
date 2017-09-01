var http=require('http'),fs=require('fs'),url=require('url');
http.createServer(function (request,response) {
   var pathUrl=url.parse(request.url).pathname;
    if(pathUrl=='/'){
        pathUrl='/index.html'
    }
    fs.readFile('./'+pathUrl,function (err,data) {
        var type = pathUrl.substr(pathUrl.lastIndexOf(".")+1,pathUrl.length);
       response.writeHead(200,{"Content-Type":"text/"+type+";charset=UTF8"});
       response.end(data)
    });
}).listen('3000');