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
