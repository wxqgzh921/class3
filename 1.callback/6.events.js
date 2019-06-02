let fs = require('fs');

//发布 ->   中间代理  <-  订阅   发布和订阅之间没有任何联系
//观察者模式（vue) 包含 发布订阅 
//观察者模式：观察者和被观察者  如果被观察者数据变化了  通知观察者

function Events(){
    this.callbacks = [];
    this.datas = [];
}
Events.prototype.on = function(callback){   //订阅
    this.callbacks.push(callback);
}
Events.prototype.emit = function(data){  //发布
    this.datas.push(data);
    this.callbacks.forEach(c => c(this.datas));
}
let e = new Events();
e.on(function(arr){
    if(arr.length == 2){
        console.log(arr);
    }
})

fs.readFile('./写入.txt','utf8',function(err,data){
    e.emit(data)  //错误优先   第一个参数永远是error
})
fs.readFile('./name2.txt','utf8',function(err,data){
    e.emit(data)
})

