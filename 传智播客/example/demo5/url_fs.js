var http=require('http'),fs=require('fs'),url=require('url');

//path.extname() //拿取拓展名
var path=require('path');
http.createServer(function (req,res) {
    //getUrl
    var pathname=url.parse(req.url).pathname;
    //removeIco
    if(pathname=='/favicon.ico'){
        return
    }
    //默认的地址
   if(pathname=='/'){
        pathname='index.html'
   }
   //拓展名
    var extname=((path.extname(pathname)).replace('.',''));
    //读取文件
    fs.readFile('./album/'+pathname,function (err,data) {
        if(err){
            //如果没有找到就输出404
            fs.readFile('./album/555/404.html',function (err,data) {
                res.writeHead(404,{"Content-type":"text/html;charset=UTF8"});
                console.log(extname);
                res.end(data);
            });
            return;//必须返回
        }
        //备注掉的其实写也可以不写也可以
        //res.writeHead(200,{"Content-type":"text/"+extname+";charset=UTF8"})
        res.end(data)
    });
}).listen('3000');