
let fs = require('fs')
let Promise = require('./promise');


let p1 = new Promise((resolve,reject)=>{
    resolve(new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1000)
        },1000)
    }))
})
p1.then(data=>{
    console.log(data)
})

// function read(url){
//     return new Promise((resolve,reject)=>{
//         fs.readFile(url,'utf8',(err,data)=>{
//             if(err) reject(err)
//             reslove(data)
//         })
//     })
// }
// angular Q 延迟对象

// 减少嵌套  通过该方法创建一个promise对象 Promise.defer（）
// function read(url){
//     let dfd = Promise.defer();
//     fs.readFile(url,'utf8',(err,data)=>{
//         if(err) dfd.reject(err)
//         dfd.resolve(data)
//     })
//     return dfd.promise;
// }
// read('name1.txt').then( data =>{
//     console.log(data)
// })