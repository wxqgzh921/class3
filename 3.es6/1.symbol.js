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
        return 'a' in values
    }
}
console.log({a:1} instanceof obj2)

//Symbol.isConcatSpreadable  // 是否展开拼接的

var arr = [1,2,3];
// console.log([].concat(arr,1,2,3))
arr[Symbol.isConcatSpreadable] = false
console.log([].concat(arr,1,2,3))

// match  split search

let obj3 = {
    [Symbol.match](value){
        return value.length === 3
    }
}
console.log('abc'.match(obj3))

// species 衍生对象 静态属性
class myArr extends Array{
    constructor(...args){
        super(...args)
    }
    // static [Symbol.species]() 这样写就会是静态方法 不是属性 加个get 就可以了 取方法的值 object.defineProperty
    static get [Symbol.species](){
        return Array
    }
}

var my = new myArr(1,2,3);
var othermy = my.map(item=>item*=2)   // othermy 是my 的衍生对象
console.log(othermy)
console.log(othermy instanceof myArr);

// Symbol.toPrimitive  数据类型转换

let obj4= {
    [Symbol.toPrimitive](type){
        console.log('type:' , type)
        return 
    }
}
console.log('obj:',obj4++);  //type: number  obj: NaN

// Symbol.toStringTag  // 将类型进行更改

let obj5 = {
    get [Symbol.toStringTag](){
        return 'string'
    }
}
console.log(Object.prototype.toString.call(obj5));

// Symbol.unscopables  不在作用域中
let arr1 = [];
// with({name:1}){
//     console.log(name)
// }
console.log(arr1[Symbol.unscopables])  // 看 数组的哪些方法是否在arr的作用域内
with(arr1){  // 数组的方法 foreach 
    console.log(forEach)
    console.log(keys)
}