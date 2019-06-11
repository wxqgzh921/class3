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
let p1 = new Promise((reslove,reject)=>{
    reslove(100)
})
let p2 = p1.then(()=>{
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            reslove('成功')
        },1000)
    })
},e=>{
    console.log(e)
})
console.log(p2)
p2.then(data=>{
    console.log('data',data);
},err=>{
    console.log('err',err)
})
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

// read('./name1.txt')
//     .then((data)=>{
//         return read(data)
//     })
//     .then((data)=>{
//         console.log(data)
//     },err=>{
//         console.log('err',err)
//     })


//当promise2 === 返回的promise2
// 循环引用 保证返回的promise不是当前then返回的promise 否则就变成自己等待自己完成
// let p1 = new Promise((reslove,reject)=>{
//     reslove(1000)
// })
// let promise2 = p1.then((data)=>{
//     return promise2
// })
// promise2.then(()=>{

// },(err)=>{
//     console.log(err)
// })
