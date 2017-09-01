//路由开始啦~

var http=require('http');
http.createServer(function (req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF8"})
    //获取url
    var userUrl=req.url;
    //使用substr函数来判断此时的开头
    if(userUrl.substr(0,9)=='/student/'){
        var studentid=userUrl.substr(9);
        if(/\d{10}/.test(studentid)){
            res.end('您要查询学生信息，id是'+studentid)
        }else {
            res.end('学生学号位数不对')
        }
    }else if (userUrl.substr(0,9)=='/teacher/'){
        var teacherid=userUrl.substr(9);
        if(/\d{10}/.test(teacherid)){
            res.end('您要查询老师信息，id是'+teacherid)
        }else {
            res.end('学生老师位数不对')
        }
    }else {
        res.end("请检查url")
    }
    //正则判断此时的地址
    var reg=/\w/
}).listen('3000');