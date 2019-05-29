let fs = require('fs')
//flag :  r 读的意思  w 写    a 追加  r+  文件不存在报错    w+ 文件不存在会创建


// 0o666   2 读取  4 写入  1 执行

//读-----------------------------------------
// let buffer = Buffer.alloc(3)
// fs.open('./name2.txt','r',(err,fd)=>{  //fd 文件描述符
//     // console.log(fd)
//     //fd 文件描述符
//     // buffer 读取到哪个buffer中
//     // offset buffer从哪个位置开始
//     // length 向buffer中写入多少个
//     // position 从文件的哪个位置读取
//     fs.read(fd,buffer,0,3,0,(err,bytesRead)=>{
//         console.log(buffer.toString())
//         console.log(bytesRead) //3 写入的字节
//     })
// })
//写-----------------------------------------
// let buf1 = Buffer.from('吃饭睡觉打豆豆')
// fs.open('./name2.txt','w',(err,fd)=>{
//     fs.write(fd,buf1,0,buf1.length,0,(err,written)=>{
//         // console.log(written)
//         fs.close(fd,()=>{
//             console.log('文件关闭成功')
//         })
//     })
// })

//-----------------------------------------
// let buf2 = Buffer.from('吃饭睡觉打豆豆')
// fs.open('./name2.txt','r+',(err,fd)=>{
//     fs.write(fd,buf2,0,buf2.length,3,(err,written)=>{
//         // console.log(written)
//         fs.close(fd,()=>{
//             console.log('文件关闭成功')
//         })
//     })
// })

//pipe pipe的原理
const bufferSize = 3;
let buffer = Buffer.alloc(bufferSize)
fs.open('./写入.txt','w',(err,wfd)=>{
    fs.open('./name2.txt','r',(err,rfd)=>{
        fs.read(rfd,buffer,0,)
    })
})

