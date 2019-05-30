// 广度遍历   深度遍历  先序

//文件夹

let fs = require('fs')
//fs.mkdir 也有同步和异步 (创建文件夹,不可跳级创建  创建b必须有a)
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

//同步(删除)
// -----------------------------------------




// fs.mkdir("./a/b",(err)=>{
//     console.log(err);
// })