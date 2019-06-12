
let fs = require('fs')
let Promise = require('./promise');


let p1 = new Promise((reslove,reject)=>{
    reslove(100)
})
p1.then().then().then(data=>{
    console.log(data)
},e=>{
    console.log(e)
})