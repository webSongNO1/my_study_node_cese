var fs=require('fs');
var data='';

//创建可读流
var readerStream=fs.createReadStream('index.txt');

//设置编码为utf8
readerStream.setEncoding('UTF8');

//处理流事件
readerStream.on('data',function (chunk) {
    data+=chunk;
});

readerStream.on('end',function () {
   console.log(data);
});

readerStream.on('error',function (error) {
    console.log(error.stack);
});