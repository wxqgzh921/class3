//promise 是一个类  new promise  天生自带的
// promise 含义：承诺    3个状态：成功态  失败态  等待态
// promise  会存放2个变量  value reason
// promise的实例上会有 then方法

//创建一个promise的时候 ，需提供一个执行器函数 此函数是立即执行
// 默认是等待态  可以转化成成功态 失败态  状态更改后不能改变状态

// const Promise = require('./promise')
// let  promise = new Promise(function(reslove,reject){
//     reject(123)
//     reslove(456)
// });
// console.log(promise) //等待态
// promise.then(function(value){
//     console.log('success，'+value)
// },function(reason){
//     console.log('fail，'+ reason)
// })

// promise.then(function(value){
//     console.log('success，'+value)
// })

 //2）执行时发生异常
// const Promise = require('./promise')
// let  promise = new Promise(function(reslove,reject){
//     throw new Errow('错误')  //执行时会发生异常
// });
// //console.log(promise) //等待态
// promise.then(function(value){
//     console.log('success，'+value)
// },function(reason){
//     console.log('fail，'+ reason)
// })

// 3）setTimeout （发布订阅）
const Promise = require('./promise')
let  promise = new Promise(function(reslove,reject){
    setTimeout(function(){
        reslove('成功')
    },1000)
});
promise.then(function(value){
    console.log('success，'+value)
},function(reason){
    console.log('fail，'+ reason)
})
promise.then(function(value){
    console.log('success，'+value)
},function(reason){
    console.log('fail，'+ reason)
})