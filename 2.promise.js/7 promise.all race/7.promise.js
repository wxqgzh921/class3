
let fs = require('fs')
// let Promise = require('./promise');
// let bulebird = require('bluebird');


// let read = bulebird.promisify(fs.readFile);

// read('name1.txt','utf8').then(data=>{
//     console.log(data)
// })

// pormisify promise化   node中已经借鉴了 所有的异步方法参数第一个都是error
// function promisify(fn){
//     return function(){
//         return new Promise((resolve,reject)=>{
//             fn(...arguments,(err,data)=>{
//                 if(err) reject(err)
//                 resolve(data)
//             })
//         })
//     }
// }

// let read = promisify(fs.readFile);

// read('name1.txt','utf8').then(data=>{
//     console.log(data)
// })

// mz 它里面把所有的node模块 都进行了包装 包装成promise 