//输出全局变量 __filename的值
console.log(__filename);
//值是模块文件的路径。

console.log(__dirname);
//__dirname 表示当前执行脚本所在的目录。

process.on('exit', function(code) {

    // 以下代码永远不会执行
    setTimeout(function() {
        console.log("该代码不会执行");
    }, 0);

    console.log('退出码为:', code);
});
console.log("程序执行结束");