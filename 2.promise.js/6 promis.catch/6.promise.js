
let fs = require('fs')
let Promise = require('./promise');


let p1 = new Promise((resolve,reject)=>{
    reject(100)
})
// catch  是没有成功的then
// p1.then(null,e=>{
//     console.log('err',e)
// })

p1.catch(e=>{
    console.log('err',e)
})

// 怎么实现finally
// p1.then(data=>{
//     console.log(data)
// },e=>{
//     console.log('err',e)
// })
// .finally(()=>{
//     console.log('hello')
// })


Promise.resolve(123).then(data=>{
    console.log(data)
},e=>{
    console.log(e)
})