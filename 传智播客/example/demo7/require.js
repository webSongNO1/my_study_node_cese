var foo=require('foo.js');//从node_modules引用
console.log(foo.foo);
var bar=require('bar');//引用一个文件夹,从node_modules引用,默认引入的是index.js入口文件
console.log(bar.str);//当在bar文件夹中配置了package.json文件后，就可以指定加载哪个文件了。
var sd=require('silly-datetime');
var date=sd.format(new Date(),'YYYY-MM-DD HH:mm');//引入了一个插件
console.log(date);


var datetime = +new Date() + 10 * 60 * 60 * 1000;
sd.locate('zh-cn');
var date10=sd.fromNow(datetime);
console.log(date10);