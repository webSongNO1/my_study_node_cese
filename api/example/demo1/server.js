/*
创建 Node.js 应用
步骤一、引入 required 模块
我们使用 require 指令来载入 http 模块，并将实例化的 HTTP 赋值给变量 http，实例如下:
*/
var http=require('http');
/*
* 步骤二、创建服务器
接下来我们使用 http.createServer() 方法创建服务器，并使用 listen 方法绑定 8888 端口。 函数通过 request, response 参数来接收和响应数据。
实例如下，在你项目的根目录下创建一个叫 server.js 的文件，并写入以下代码：
* */
http.createServer(function (request,response) {
    // 发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    //发送响应数据'hello world'
    response.end('hello world');
}).listen('8888');