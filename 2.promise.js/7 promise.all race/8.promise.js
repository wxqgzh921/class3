
let fs = require('mz/fs');

// let Promise = require('./promise');
//--------------------------------------------
// let bulebird = require('bluebird');
// let read = bulebird.promisify(fs.readFile);
//--------------------------------------------
// read('name1.txt','utf8').then(data=>{
//     console.log(data)
// })
//--------------------------------------------
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
//--------------------------------------------

// mz  把所有的node模块都进行了包装  都包装成了promise 
// fs.readFile('name2.txt','utf8').then((y)=>{
//     console.log(y)
// })

//--------------------------------------------

// promise all 
// Promise.all = function(arrs){
//     return new Promise((resolve,reject)=>{
//         let results = [];
//         let i =0;
//         function hander(value,index){
//             results[index] = value
//             if(++i === arrs.length){
//                 resolve(results)
//             }
//         }
//         for(let i = 0;i < arrs.length;i++){
//             let current = arrs[i];
//             if(typeof current === "function" || (typeof current === "object" && current !== null)){
//                 if(typeof current.then === "function"){
//                     current.then((y)=>{
//                         hander(y,i)
//                     },e=>{
//                         reject(e)
//                     })
//                 }else{
//                     hander(current,i)
//                 }
//             }else{
//                 hander(current,i)
//             }
//         }
//     })
// }

Promise.all = function(values){
    return new Promise((resolve,reject)=>{
        let results = []; // 放结果的数组
        let i = 0;
        let handleArr = (value,index)=>{
            results[index] = value;
            if( ++i === values.length){
                resolve(results)
            }
        }
        for(let i = 0 ; i < values.length; i++ ){
            let current = values[i];
            if( typeof current === "function" || (typeof current === "Object" && current !== null)){
                if( typeof current.then === "function"){
                    current.then(data=>{
                        handleArr(data,i);
                    },e=>{
                        reject(e);
                    })
                }else{
                    handleArr(current,i)
                }
            }else{
                handleArr(current,i)
            }
        }
    })
}

Promise.all([fs.readFile('name1.txt','utf8'),fs.readFile('name2.txt','utf8'),1,2,3])
    .then(datas=>{
        console.log(datas)
    },e=>{
        console.log(e)
    })
