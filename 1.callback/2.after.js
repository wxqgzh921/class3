// 高阶函数  lodash  after  (返回值是函数，参数也是函数)


function after(time,callback){
    return function(){
        if( --time == 0){
            callback()
        }
    }
}
let fn  = after(3,function(){
    console.log('3次完成')
})
//解决异步
fn()
fn()
fn()
