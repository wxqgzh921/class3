// let const 
// var的特点：
// 1) 变量提升
{
    console.log(a);
    var a = 1;  
} // undefined

{   
    console.log(a);
    let a = 1; 
}  // 报错 暂时性死区  

// 2) var可以重复赋值  let 不可以
{
    let a = 1;
    let a = 2; 
}
// 3) js之前并没有块级作用域    全局（用var 声明的变量会污染全局，let 不污染） 函数

{var a = 1 ;
window.a}

// 4)   暂时性死区  外面的a 和 里面的a 不是一个a
let a = 100;
{                                       //{  
    console.log(a)      //  =>                    let a ;
    let a = 1;                          //         console.log(a);
                                        //         a = 1;  
}  // a is not defined                  // }

// 5) 
for(var i =0 ;i< 10;i++){
    setTimeout(function(i){
        console.log(i)
    },100,i)
}

for(var i = 0 ;i< 10;i++){
    (function(i){
        setTimeout(function(){
            console.log(i)
        },100)
    }(i))    // 立即执行函数
}

// function a(i){
//     console.log(i,this.name,this.age)
// }
// a(9)
// a.apply({name:'a'},[9])
// a.call({age:'10'},9)

// const 常量 （不能更改的引用地址）  如果 const a = {}  则可以改他地址中的内容  并没有改变他的指向

// symbol 基本数据类型  ： String boolean number undefined  null 
// 特点  用symbol声明的是独一无二的  永远不相等

let s1 = Symbol('aaa');  //symbol中的标识一般只能放 number string 
let s2 = Symbol();
console.log(s1 === s2)  // false 
console.log(s1) //会将对象转成string
 
// symbol 中可以增加标识 symbol中的标识一般只能放 number string 
// symbol的用法：类中可以存放私有属性

let obj = {
    [s1]:1  // es6 的语法 获取到 s1
} // 声明的 symbol 属性是不可枚举的
console.log(obj[s1])

for(let k in obj){
    console.log(obj[key],'+++++++')   //不会运行
}
console.log(Object.getOwnPropertySymbols(obj)); //获取Obj的symbol属性

let s3 = Symbol.for('aaaaaa');   // 通过symbol.for创建的  没有如果 创建新的   如果有 则不创建了
let s4 = Symbol.for('aaaaaa');
console.log(s3===s4,Symbol.keyFor(s3));  // symbol.keyfor 获取通过for创建的symbol的标识

// symbol内置对象 symbol.iterator 实现对象的遍历 
// 元编程  实现对原生js的操作进行修改

let obj2 = {
    [Symbol.hasInstance](values){
        return 'a' instanceof values
    }
}
console.log({a:1} instanceof obj2)