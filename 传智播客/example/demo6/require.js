/*
//单个加载
var foo=require('./exports');
console.log(foo.foo+foo.name);
console.log(foo.fn1('宋宇'));*/
//模块加载
var obj=require("./exports_module");
var web=new obj('websong',23,'webIt');
console.log(web.fn1());