let corp = {}; //自定义一个公司对象
// 这里放一个列表用来缓存回调函数
corp.list= [];
// 去订阅事件
corp.on = function(key,fn){
    //如果对象中没有相应的key
    //也就说明没有订阅过
    //那就给key建个缓存列表
    if(!this.list[key]){
        this.list[key] = [];
    }
    //把函数添加到相应key的缓存列表中
    this.list[key].push(fn);
};
//去发布事件
corp.emit = function(){
    //第一个参数是对应的key值
    // 直接用数组的shift方法取出
    let key=[].shift.call(arguments),
    fns = this.list[key]
    if(!fns || fns.lenth === 0){
        return false;
    }
    //遍历key值对应的缓存列表
    //依次执行函数的方法
    fns.forEach(fn => {
        fn.apply(this,arguments);
    });
}
corp.on('join',(position,salary)=>{
    console.log('你的职位:' + position);
    console.log('你的薪水:' + salary);
})
corp.on('other',(skill,hobby)=>{
    console.log('你的技能：' + skill);
    console.log('你的爱好：' + hobby);
})
corp.emit('join','前端',10000);
corp.emit('join','后端',20000);
corp.emit('other','端茶送水','足球');