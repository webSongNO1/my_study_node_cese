var fs=require('fs');
var data='向天再借五百年';

//创建（读取）一个写入的流，写入到文件input.txt中
var writerSteam=fs.createWriteStream('input.txt');

//使用utf8编码写入
writerSteam.write(data,'UTF8');

//标记文件末尾
writerSteam.end();

//处理流事件
writerSteam.on('finish',function () {
    console.log('写入完成')
});

writerSteam.on('error',function (err) {
    console.log(err.stack);
});
