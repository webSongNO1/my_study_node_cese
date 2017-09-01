/// 引入 events 模块
//var events = require('events');
// 创建 eventEmitter 对象
//var eventEmitter = new events.EventEmitter();
/*
EventEmitter 对象如果在实例化时发生错误，会触发 error 事件。当添加新的监听器时，newListener 事件会触发，当监听器被移除时，removeListener 事件被触发。
下面我们用一个简单的例子说明 EventEmitter 的用法：*/

/*
eventEmitter.on('some_event',function () {
    console.log('ok')
});
*/

/*setTimeout(function () {
    eventEmitter.emit('some_event');
},1000);*/
/*
* 运行这段代码，1 秒后控制台输出了 'some_event 事件触发'。其原理是 event 对象注册了事件 some_event 的一个监听器，然后我们通过 setTimeout 在 1000 毫秒以后向 event 对象发送事件 some_event，此时会调用some_event 的监听器。*/


/*带参数的*/
var events = require('events');
var emitter = new events.EventEmitter();
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {
    console.log('listener2', arg1, arg2);
});
emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');