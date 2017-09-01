var http=require("http"),querystring=require('querystring');
//post请求
var postData='';
http.createServer(function (req,res) {
    res.writeHead(200,{"Content-type":"text/html;charset=UTF8"});
    if(req.url=='/post'&&req.method.toLowerCase()=='post'){
        //成功后接受post数据,node里的post的公式
        req.addListener('data',function (chunk) {
            postData+=chunk.toString();
            //console.log(chunk.toString())
        });
        //全部传输完毕后
        req.addListener('end',function () {
            //将数据解析成对象的键值形式使用querystring
          var okdata=querystring.parse(postData);
            console.log(okdata);
        })
    }
    res.end(req.url);
}).listen("3000");


