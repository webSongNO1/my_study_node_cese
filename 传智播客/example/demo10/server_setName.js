var formidable = require('formidable'),
    http = require('http'),
    util = require('util'),
    fs=require('fs'),
    sd=require('silly-datetime'),
    path=require('path');

//重写文件名字和后缀。
http.createServer(function(req, res) {
    if (req.url == '/upload' && req.method.toLowerCase() == 'post') {
        // parse a file upload
        var form = new formidable.IncomingForm();
        form.uploadDir='./uploads';
        form.parse(req, function(err, fields, files) {
            res.writeHead(200, {'content-type': 'text/plain'});
            //res.write('received upload:\n\n');
            //res.end(util.inspect({fields: fields, files: files}));
            //改名开始啦~
            //时间后缀
            var ttt=sd.format(new Date(),'YYYYMMDDHHmm');
            var ran=parseInt(Math.random()*89999+10000);
            //得到文件后缀
            var extname=path.extname(files.upload.name);
            var oldpath=__dirname+'/'+files.upload.path;
            var newpath=__dirname+'/uploads/'+ttt+ran+extname;
            //改名
            fs.rename(oldpath,newpath,function (err) {
                if (err){
                    throw Error('改名失败');
                }
                res.end('ok')
            })
        });

        return;
    }
}).listen(3000);