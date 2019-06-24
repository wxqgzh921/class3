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


// 缺陷 ： 给obj设一个不存在的属性 就不会触发
{
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
}


function update(){
    console.log('更新')
}
let obj = {
    name: 1,
    age: {c:{c:1}}
}
let handerfn = {
    set(target,key,value){
        update()
        return Reflect.set(target,key,value)
        // target[key] = value;
        // return true
    },
    get(target,key){
        if(typeof target[key] === 'object'){
            return new Proxy(target[key],handerfn)
        }
        return Reflect.get(target,key)
        // return target[key]
    }
}
let proxy = new Proxy(obj,handerfn)
// proxy.name = '100'
// proxy.c = 1000   新给一个c update()会照常运行
proxy.age.c.c = 1000
// console.log(proxy.age.c.c)