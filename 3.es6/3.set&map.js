// set map 去重

// set 放的是一个个的值  map 是键值对
// 可以使用 symbol.interator for of foreach 进行遍历
let set = new Set([1,2,3,1,2,3]);
set.add(4)
// set.clear()  清空
// set.delete(number)  删除某一个值
set.forEach(element => {
    console.log(element)
});
console.log(set) 
console.log(set.entries()) // set.entries()  键值对  类似于  Object.entries() es5获取键值对  Object.keys()获取键  Object.values()获取值

// let obj = {name:1,age:2}
// console.log(Object.entries(obj))

// 实现数组的并集 交集 差集
let arr1 = [1,2,3,5,5,6]
let arr2 = [1,2,3,4]
// 并集
//  function union(arr1,arr2){
//     let result = new Set([...arr1,...arr2])
//     return [...result];
//  }
//  console.log(union(arr1,arr2))

// 交集 
// function interator(arr1,arr2){
//     let arr2set = new Set(arr2);
//     return [...arr1.reduce((reuslt,item)=>{
//         if(arr2set.has(item)){
//             reuslt.add(item)
//         }
//         return reuslt
//     },new Set)]

//  }
// 交集的另一种写法 （差集就是把交集has取非）
function interator(arr1,arr2){
    let a2 = new Set(arr2);
    return [...new Set(arr1.filter(item=>{
        return !a2.has(item)
    }))]
}
 console.log(interator(arr1,arr2))

 // 内存泄露  浏览器中 垃圾回收机制 标记清楚 当前的变量有没有被引用
let map = new Map([['a','1'],['b','2'],['a','100']]);  // 二维数组
let obj = {name:1}
map.set('c',1)  //set 既可以放数字又可以放对象  会造成内存泄露
// map.set({name:1},1)
map.set(obj,1);
obj = null
console.log(map);



