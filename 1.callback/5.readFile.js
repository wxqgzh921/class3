let fs = require('fs');
// 异步不能使用try catch
// 同步“异步的返回结果”  异步“并行”  串行

function after(time,callback){   //使用after函数 可以简化异步操作
    let arr = [];
    return function(err,data){
        if(err){
            throw new Error(err);
        }
        arr.push(data);
        if(--time == 0){
            callback(arr)
        }
    }
}
let newFn = after(2,function(arr){
    console.log(arr)
})
fs.readFile('./写入.txt','utf8',function(err,data){
    newFn(err,data)  //错误优先   第一个参数永远是error
})
fs.readFile('./name2.txt','utf8',function(err,data){
    newFn(err,data)
})

//发布订阅 模式