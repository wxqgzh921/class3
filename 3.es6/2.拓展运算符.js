// 解构赋值  结构相同可以直接拿出来使用  既能声明，又能赋值
let [a,b,c] = [1,2,3];
console.log(a,b,c)
let [,b,c] = [1,2,3];
console.log(b,c)

// 拓展运算符 （展开运算符） 剩余运算符（只要a,其他的不要）
let [a,...args] = [1,2,3];  //剩余运算符
console.log(a,args)

let {length} = [1,2,3]
console.log(length)  // 3  数组里有length  结构相同共同的属性

let {b:c} = {a:1,b:3}
console.log(c)   //3  

//展开   深拷贝  拷贝后和拷贝前无关    浅拷贝 拷贝前和拷贝后有关 
let obj = {name:1}
let arr = [obj,1,2,3,4]; 
// let newArr = [...arr]
obj.name=3;
let newArr = arr.slice(0)   
console.log(arr === newArr)   // FALSE
console.log(newArr)  // name 变了   slice是浅拷贝

// ... slice object.assign 浅拷贝 都是引用了之前的地址

// 如何实现深拷贝    
let object={name:1,obj1:{name:2},function(){}}
let r = JSON.parse(JSON.stringify(object)) // 纯对象没有问题
console.log(r)   // function会丢了，不是对象的都会丢了或者出错

// 递归拷贝 //深度拷贝  

function deepclone(obj,hash = new WeakMap){
    // 遇到null , date reg 都直接返回
    if(obj == null) return obj
    if(typeof obj !== 'object' ) return obj
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    if(hash.has(obj)){  // 有拷贝的直接return
        return hash.get(obj)
    }
    let newArr = new obj.constructor()
    hash.set(obj,newArr);//制作一个映射表
    for(let i in obj){
        if(obj.hasOwnProperty(i)){ //不拷贝原型链上的属性
            newArr[i] = deepclone(obj[i],hash);
        }
    }
    return newArr

}
// let obj = {name:'1',age:'2'}
// let obj = {name:'1',age:{name:1}}
let obj1 = {}
obj1.a = obj1;
let obj = {name:1,age:obj1}
console.log(deepclone(obj))  //{ name: 1, age: { a: [Circular] } }  循环引用的问题