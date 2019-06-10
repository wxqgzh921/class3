// promise的链式调用

let fs = require('fs')

function read(url){
    return new Promise((reslove,reject)=>{
        fs.readFile(url,'utf8',(err,data)=>{
            if(err) reject(err)
            reslove(data)
        })
    })
}
// 4) then 执行后可能会返回一个promise 
// 5) finally（es9）  不管成功或者失败都会执行  不会中断运行
// 6) 链式调用  promise一旦成功就不能失败  所以promise需每次调用then后返回一个新的promise 可以实现状态的切换
read('./name1.txt')
    .then((data)=>{
        return read(data)
    })
    .then((data)=>{
        console.log(data)
    },(err)=>{
        console.log(err)
    })
    .finally(()=>{
        console.log('finally')
    })

// 1) 如果then方法返回的是一个常量，包括undefined、 会把结果传递给外层的then的成功的结果
// read('./name1.txt') // 100 undefined
//     .then((data)=>{
//         return 100;
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .then((data)=>{
//         console.log(data)
//     })
// 2) 如果then方法抛出异常 会走到下一次then 的失败的结果
// read('./name1.txt')   // error undefined
//     .then((data)=>{
//         throw new Error('出错了')
//     })
//     .then((data)=>{
//         console.log(data)
//     },(err)=>{
//         console.log(err)
//     })
//     .then((data)=>{
//         console.log(data)
//     })
    
// 3) 如果then方法抛出异常 没有处理错误 会穿过当前的then 向下一个then找错误处理， 会就近查找，一般会写个catch()方法 catch不会中断运行
// read('./name1.txt')   // error 
//     .then((data)=>{
//         throw new Error('出错了')
//     })
//     .then((data)=>{
//         console.log(data)
//     })
//     .then((data)=>{
//         console.log(data)
//     },(err)=>{
//         console.log(err)
//     })
//     .catch((err)=>{
//         console.log('catch')
//     })
