
// let fs = require('fs')
let fs = require('mz/fs')


// mz 它里面把所有的node模块 都进行了包装 包装成promise 

// fs.readFile('name2.txt','utf8').then((data)=>{
//     console.log(data)
// })

// promise all 

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
    .then(data=>{
        console.log(data)
    })