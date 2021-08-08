// proxy 代理
// let p = new Proxy(target,handel);   // target: 使用Proxy包装的目标对象，可以为任意对象，数组，函数，或者另一个代理。  handel：处理器对象，一个通常以函数作为属性的对象，各属性中的函数分别定义了在执行各种操作时代理 p 的行为


let test = {
    name:'旺仔'
}
test = new Proxy(test,{
    get(target,key){
        console.log('获取到getter属性');
        return target[key]
    }
})
console.log(test.name)