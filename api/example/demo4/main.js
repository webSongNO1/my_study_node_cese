//引入events模块
var events=require('events');
//创建eventEmitter对象
var eventEmitter=new events.EventEmitter();//事件触发器
//创建事件处理程序
var connectHandier=function connected() {
    console.log('连接成功！')
    //触发data_received事件
    eventEmitter.emit('data_received')
};
//绑定connection事件处理程序==》链接事件程序
eventEmitter.on('connection',connectHandier);

//使用匿名函数绑定data_received事件
eventEmitter.on('data_received',function () {
   console.log('数据接受成功！')
});
//触发connection事件//链接事件
eventEmitter.emit('connection');

console.log('本次程序到此结束');