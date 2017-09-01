var http=require('http'),fs=require('fs');

http.createServer(function (req,res) {
    //创建文件夹
    fs.mkdir('./album/555',function (err) {
        console.log('ok')
    });
    //探测的文件是不是文件夹？
    fs.stat('./album/555',function (err,data) {
        console.log(data.isDirectory())
    });
    res.end()
}).listen('3000');