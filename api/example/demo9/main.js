var http=require('http');
var url=require('url');

function start(route) {
    http.createServer(function (request,response) {
        var pathname=url.parse(request.url).pathname;
        console.log('请求'+pathname+'收到');

        route(pathname);

        response.writeHead(200,{"Content-Type":"text/html;charset=UTF8"});
        response.write('墨迹墨迹');
        response.end();
    }).listen('8888');

    console.log('执行完毕')
}
exports.start=start;

