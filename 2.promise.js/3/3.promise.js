// promise的链式调用

let fs = require('fs')
let Promise = require('./promise');

function read(url){
    return new Promise((reslove,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err) reject(err)
            reslove(data)
        })
    })
}

// 6) 链式调用  promise一旦成功就不能失败  所以promise需每次调用then后返回一个新的promise 可以实现状态的切换
// read('./name1.txt')
//     .then((data)=>{
//         throw new Error('出错了！！')
//     })
//     .then((data)=>{
//         console.log(data)
//     },err=>{
//         console.log('err',err)
//     })

read('./name1.txt')
    .then((data)=>{
        return read(data)
    })
    .then((data)=>{
        console.log(data)
    },err=>{
        console.log('err',err)
    })