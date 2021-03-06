// buffer 代表的是内存，一旦声明后，不能随便更改大小 ，比较像数组，存放着很多个16进制 每个16进制都代表一个字节

let buffer = Buffer.alloc(5); //在node中最小单位 字节  （声明5个字节长度的buffer） 安全的  默认会清空buffer
buffer = Buffer.allocUnsafe(5); //声明不安全（一般不用，生成随机） //<Buffer ac c1 3e 02 00>
console.log(buffer);    //<Buffer 00 00 00 00 00>

//buffer可以和字符串互相转化
let buf = Buffer.from('珠峰'); //一个汉字3个字节， node中只认utf-8 可以使用其他的编码库进行转码
console.log(Buffer.isBuffer(buf)); // true （判断是不是buffer类型）
console.log(buf.length) //字节的长度

// alloc 根据长度声明buffer
// from  可以用字符串声明buffer
// isBuffer 是不是buffer
// 具备着数组的常用方法 forEach
// toString()
// 前端给服务端发数据 分片 分段  把很多数据拼在一起
// concat()
// split()

// let r = Buffer.from([0x16]); //可以通过数组的方式声明  （10进制是22）
// console.log(r); //<Buffer 16>

// r.forEach(item => {
//     console.log(item)
// });

// let buf1 = Buffer.from('珠峰');
// let a = buf1.slice(0,3) // （浅拷贝，拷贝的是引用地址）slice(start,end) start: 规定从何处开始选取，如果是负数，则规定从数组尾部开始算起的位置，-1是最后一个元素。 end:规定从何处结束选取，该参数是结束处的数组下标，如果没有指定参数，是所有的元素，如果是负数，从数组尾部开始算。 
// console.log(a.toString(),buf1.toString())

// let buf1 = Buffer.from('珠');
// let buf2 = Buffer.from('峰');
// let bigbuf = Buffer.alloc(6); //数据的合并
// Buffer.prototype.copy = function(targetBuffer,targetStart,sourceStart,sourceEnd){
//     for(let i = 0 ; i < sourceEnd- sourceStart; i++ ){
//         targetBuffer[targetStart+i] = this[i]  //谁调的copy就指的谁
//     }
// }
// //targetBuffer 目标buffer（拷贝给谁） targetStart 目标开始（拷贝在目标buffer的哪个位置） sourceStart 源的开始(从哪开始拷贝) sourceEnd 源的结束（拷贝到哪里结束）
// buf1.copy(bigbuf,0,0,3);
// buf2.copy(bigbuf,buf1.length,0,3);
// console.log(bigbuf.toString())

Buffer.concat = function(bufferList,len= bufferList.reduce((result,item)=>result+item.length,0)){
    let buffer = Buffer.alloc(len);
    let offset = 0;
    bufferList.forEach( buf => {
        buf.copy(buffer,offset);
        offset += buf.length;
    });
    return buffer;
}
var a = Buffer.from('珠峰');
var b = Buffer.from('目');
var c= Buffer.concat([a,b],6)
console.log(c.toString()) //珠峰




Buffer.prototype.split = function(sep){
    let arr = [];
    let offset = 0 ;
    let len = Buffer.from(sep).length;
    let current ;
    while(-1 != (current = this.indexOf(sep,offset))){
        arr.push(this.slice(offset,current));
        offset = current + len;
    }
    arr.push(this.slice(offset))
    return arr;
}
let buf3 = Buffer.from('珠峰猪我你');
// let i = buf3.indexOf('你');
// console.log(i);
console.log(buf3.split('我').toString())

