// es6提供了类  类只能用new
// 类上的 必须是静态的  static  （通过类来调用）
class Animal{
    constructor(){
        // if(new.target === Animal){
        //     throw new Error('animal类不能被new,可以继承')
        // }
        this.type = '哺乳类'
    }
    get a(){   
        console.log('这个是原型上的方法')
        return 'a'
    }
    eat(){   //这里的方法都是原型上的方法
        console.log('eat')
    }
}
Animal.happy ='happy' ;
let an = new Animal();
an.eat();
console.log(an.hasOwnProperty('a'))  // false  不是实例上的
console.log(an.a);
// console.log(an.happy)
