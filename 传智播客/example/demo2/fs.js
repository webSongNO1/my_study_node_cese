var http=require('http');
var fs=require('fs');
var url=require('url');
http.createServer(function (req,res) {
    var path=url.parse(req.url).pathname;
    //var ruery=url.parse(req.url).query;
    var ruery=url.parse(req.url,true).query;

   console.log(path);
   console.log(ruery);
   console.log(ruery.bb);
    res.end();
}).listen('3000');