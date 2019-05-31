// 广度遍历   深度遍历  先序

//文件夹

let fs = require('fs')
//fs.mkdir 也有同步和异步 (创建文件夹,不可跳级创建  创建b必须有a)
// fs.mkdir("./a/b",(err)=>{
//     console.log(err);
// })
//同步(创建)
// -----------------------------------------
// function mkdirSync(path){
//     let arr = path.split('/');
//     for(let i = 0; i < arr.length ; i++){
//         let p = arr.slice(0,i+1).join('/')
//         try {
//             //如果文件夹不存在  就创建
//             fs.accessSync(p)
//         } catch (error) {
//             fs.mkdirSync(p)
//         }
//     }
// }
// mkdirSync('q/a/b/c/d/e')
// -------------------------------------------

//异步(创建)
//--------------------------------------------
// function mkdir(path,callback){
//     let arr = path.split('/');
//     let index = 0;
//     function next(){
//         //递归必须要有终止条件
//         if(index >= arr.length) return callback();
//         let p = arr.slice(0,index+1).join('/');
//         fs.access(p,(err)=>{
//             if(err){
//                 index++;
//                 fs.mkdir(p,next);
//             }else{
//                 index++;
//                 next();//如果文件夹存在  就去创建下一个
//             }
//         })
//     }
//     next();
// }

// mkdir('y/u/i/o/p',()=>{
//     console.log('停止')
// })
//--------------------------------------------

//删除文件
// -----------------------------------------
//fs.unlinkSync('./name.txt') //同步删除文件

//删除文件夹
// fs.rmdirSync('a')

//读取目录
//console.log(fs.readdirSync('a')) //看a下面有什么
//返回文件的状态  isDirectory isFile
// let stateObj = fs.statSync('a');
// console.log(stateObj.isDirectory())

//同步删除文件夹 (深度，有儿子先删儿子)

let path = require('path')
// function rmdirSync(p){
//     let statObj = fs.statSync(p);
//     if(statObj.isDirectory()){
//         let dirs = fs.readdirSync(p); //[]
//         dirs.map(dir=>{
//             let current = path.join(p,dir);
//             rmdirSync(current)
//         })
//         fs.rmdirSync(p)
//     }else{
//         fs.unlinkSync(p)
//     }
// }

// rmdirSync('a')

//广度

function wide(p){
    let arr = [p];
    let current;
    let index = 0
    while(current = arr[index]){
        let statObj = fs.statSync(current);
        if(statObj.isDirectory()){
            //读取当前目录
            let dirs = fs.readdirSync(current); //[a,y]
            //给目录添加path
            dirs = dirs.map(d=> path.join(current,d)) //[q/a,q/y]
            //放到数组中
            arr = [...arr,...dirs];
            index++;
        }
    }
    for (let i = arr.length-1;i>=0;i--){
        let current = arr[i]
        let statObj = fs.statSync(current);
        if(statObj.isDirectory()){
            fs.rmdirSync(current)
        }else{
            fs.unlinkSync(current)
        }
    }
}

wide('q')