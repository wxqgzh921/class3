// aop 面向切片编程 

function say(who){
    console.log(who+'演讲')
}
Function.prototype.before = function(fn){
    //this => say
    // return () =>{  //箭头函数 this 指向say
    //     fn();
    //     this();
    // }
    let that = this;
    return function(){
        fn(...arguments);
        that(...arguments); //es6展开运算符  把arguments参数展开依次传人
    }
}
let newFn = say.before(function(who){
    console.log(who + '看稿')
})
newFn('我');

//回调函数 解决预置参数的问题 解决异步问题