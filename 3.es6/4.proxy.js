// object.defineProperty  es5属性访问器
// let c = 3
// let obj = {
//     //可以把属性变成方法 但是还是属性
//     get a(){
//         return c === 3 ? 3 : 1 
//     },
//     set a(value){
//         c = value
//     }
// }
// console.log(obj.a)
// obj.a = 100
// console.log(c)


let o = {}
let val = '1'
Object.defineProperty(o,'name',{
    configurable:true, // 可以删掉
    enumerable:true, // 默认不可枚举的  所以要把赋值为true
    // writable: true,
    // val:'1',
    get(){
        return val
    },
    set(value){
        val = value
    }
})
console.log(o)
delete o.name
console.log(o)