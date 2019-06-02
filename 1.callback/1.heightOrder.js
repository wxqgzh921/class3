//判断类型  Object.prototype.toString.call();

// let a = {};
// console.log(Object.prototype.toString.call(a)); //[Object Object]

// function isType(obj,type){
//     return Object.prototype.toString.call(obj).includes(type);
// }
// let a = {};
// console.log(isType(a,'Object'));

//包装成高阶函数，批量生成函数
function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj).includes(type)
    }
}
let types = ['String','Boolean','Undefined','Null','Object','Array','Nubmer'];
let fns = {}
types.forEach((type)=>{  //批量生成方法
    fns['is' + type] = isType(type)
})
let a = [];
console.log(fns.isArray(a)) //函数柯里化 （保证每个函数的参数永远是一个） //偏函数（函数的参数有多个） 都是高阶函数
