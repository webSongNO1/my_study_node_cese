var http=require('http'),fs=require('fs'),url=require('url');
http.createServer(function (req,res) {
    //不加载小图标
    if(req.url=='/favicon.ioc'){
        return ;
    }
    var userid=parseInt(Math.random()*9999)+1000;
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    //路径里必须加./，node语法
    fs.readFile('./index.html'/*,{"charset":"utf-8"}*/,function (err,data) {
        if(err){//如果没有读到这个文件，就报错
            throw err;
        }
        console.log(userid+'开始链接');
        res.end(data)
    })
}).listen('3000');