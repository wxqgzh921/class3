var name = '小王';
var age = 20;
var obj = {
    name:'小张',
    objage:this.age,//this指向全局
    myfun:function(){
        console.log(this.name+','+this.age);  //this指向obj
    }
}
obj.objage;//20
obj.myfun(); //小张，undefined

var ap = 'hello';
function ab(){
    return this.ap;  //this指向全局window
}
ab();//hello888

var obj2 = {
    name:'小李',
    age: 30
}
obj.myfun.call(obj2)  //小李,30
obj.myfun.apply(obj2)  //小李,30
obj.myfun.bind(obj2)()  //小李,30   bind（）返回一个新的函数，必须调用他
// 传参问题
var obj = {
    name:'小张',
    objage:this.age,//this指向全局
    myfun:function(eat,play){
        console.log(this.name+','+this.age+',喜欢'+eat+'和'+play);  //this指向obj
    }
}

obj.myfun.call(obj2,'吃苹果','打游戏') //小李,30,喜欢吃苹果和打游戏
obj.myfun.apply(obj2,['吃苹果','打游戏'])//小李,30,喜欢吃苹果和打游戏
obj.myfun.bind(obj2,'吃苹果','打游戏')()//小李,30,喜欢吃苹果和打游戏


///vdsvsvsdv