// es6 类  es5中的构造函数 （继承）
// es5创建一个实例，通过构造函数

// 类中创建的实例有两种属性  一种是实例身上自己的  公共的 
function Animal(){
    // if(new.target === Animal){
    //     throw new Error('animal类不能被new,可以继承')
    // }
    this.type = '哺乳类'
}
Animal.prototype.eat = function(){
    console.log('eat')
}
let an = new Animal;
// console.log(an.hasOwnProperty('type'))  // true   自己的实例
// console.log(an.hasOwnProperty('eat'))   // false  公共的
// an.eat()
// console.log(Animal.prototype === an.__proto__)  // true
// console.log(an.constructor === an.__proto__.constructor)  // true 
// console.log(Animal.prototype.__proto__ === Object.prototype)  //true

function Tiger(){
    Animal.call(this) //继承实例上的属性
}
let tiger = new Tiger;

//可以实现继承  继承公有属性
// Tiger.prototype.__proto__ = Animal.prototype
//     ||
// Object.setPrototypeOf(Tiger.prototype,Animal.prototype)
Tiger.prototype = Object.create(Animal.prototype)  //可以实现继承  继承公有属性
tiger.eat()
console.log(tiger.type)