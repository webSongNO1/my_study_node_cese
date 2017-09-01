var fs=require('fs');
//创建一个可
var readerStream=fs.createReadStream('index.txt');

//创建一个可写流
var writerStream=fs.createWriteStream('input.txt');
//管道读写操作
//将index数据写入input
readerStream.pipe(writerStream);
console.log('ok!');
