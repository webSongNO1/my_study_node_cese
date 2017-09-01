//get请求表单提交
var http=require('http');
var url=require('url');

http.createServer(function (req,res) {
    //得到查询部分，第二个参数为true的时候，他就是一个对对象。
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
    var queryObj=url.parse(req.url,true).query;
    var name=queryObj.name;
    var age=queryObj.age;
    var sex=queryObj.sex;

    res.end('得到数据：'+name+age+sex);
}).listen('3000');