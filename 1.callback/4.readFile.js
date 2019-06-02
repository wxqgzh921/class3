let fs = require('fs');
// 异步不能使用try catch
// 同步“异步的返回结果”  异步“并行”  串行

let arr = [];  //保证数据统一（这种方法不能保证）
let i = 0;
function fn(data,index){
    arr[index] = data;
    if(++i == 2){
        console.log(arr)
    }
}
fs.readFile('./写入.txt','utf8',function(err,data){
    fn(data,1)
})
fs.readFile('./name2.txt','utf8',function(err,data){
    fn(data,0)
})