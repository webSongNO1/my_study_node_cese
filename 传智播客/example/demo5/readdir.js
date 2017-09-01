var http=require('http'),fs=require('fs');
http.createServer(function (req,res) {
    //略过小图标
    if(req.url=='/favicon.ico'){return}
    //遍历album里的所有文件夹
    fs.readdir('./album/',function (err,files) {
        //他会打印出来这个文件夹中所有文件和文件夹
        //存放文件夹数组
        //强制把异步变同步
        var webjianjia=[],wenjian=[];
        (function fn1(i) {
            if(i==files.length){
                console.log(webjianjia);
                console.log(wenjian);
                return;
            }
            fs.stat('./album/'+files[i],function (err,stats) {
                if(stats.isDirectory()){
                    webjianjia.push(files[i])
                }else {
                    wenjian.push(files[i])
                }
                fn1(i+1);
            })
        })(0)
    });
    res.end()
}).listen('3000');