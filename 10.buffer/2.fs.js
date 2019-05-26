let fs = require('fs');
let path = require('path')
//所有的方法都有2个 同步和异步

// console.log(fs.readFileSync(path.resolve(__dirname,'./name1.txt'),'utf-8'))
// console.log(fs.readFileSync('./name2.txt','utf-8'))
// console.log(__dirname)

//readFile 只能读小文件 ，如果文件大，回导致内存溢出
// 64k一下的文件 都可以使用
// 写的时候会默认清空写  ，如果文件不存在会创建
fs.readFile('./name2.txt','utf8',(err,data)=>{
    fs.writeFile('./写入.txt',data,{flag:'a'},function(err){
        console.log('写入成功')
    })
})

//读取一点 暂停 接着读写

// open read write close