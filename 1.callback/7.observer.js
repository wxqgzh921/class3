// 观察者 模式
// 被观察者里面放着观察者

class Subject{
    constructor(name){
        this.name = name ;
        this.state = '咕噜咕噜';
        this.observers = []; //将观察者放到被观察者里面
    }
    //被观察者提供一个接受观察者的方法
    attach(observer){
        this.observers.push(observer);
    }
    setState(newState){
        this.state = newState;
        this.observers.forEach(o=>o.update(newState))
    }
}
class Observer{
    constructor(name){  
        this.name = name;
    }
    update(newState){
        console.log(this.name + '观察到咪咪'+ newState)
    }
}

let sub = new Subject('咪咪');
let o1  = new Observer('昊昊');
let o2 = new  Observer('琪琪');
sub.attach(o1);
sub.attach(o2);
sub.setState('生气')