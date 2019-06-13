// 判断变量类型  typeof （不能区分array和object）   intanceof （只能区分是否为实例） constructor （判断当前的构造函数 ）Object.toString （无法区分实例）
function resolvePromise(promise2,x,resolve,reject){
    // console.log('promise2',promise2,'x1',x)
    // 判断x的类型 如果是常量 则promise成功  如果是promise 则promise的结果

    if(promise2 === x){
        return reject(new TypeError('循环引用'));
    }
    let called;
    // 这个x 有可能不是自己封装的promise 有可能是别人的promise 所以需进行校验 防止一起调用成功和失败函数
    if( typeof x === "function" || (typeof x === "object" && x !== null)){
        
        try {
            let then = x.then;
            if( typeof then === "function"){
                then.call(x,y=>{
                    // y 有可能还是一个promise 调用resolvePromise直到解析出一个常量为止
                    if(called) return
                    called = true;
                    resolvePromise(promise2,y,resolve,reject)
                    // resolve(y)
                },r=>{
                    if(called) return
                    called = true;
                    reject(r)
                })
            }else{
                //如果then不是个function ，则是x是一个普通的对象
                resolve(x)
            }
        } catch (error) {
            if(called) return
            called = true;
           reject(error)
        }
    }else{
        //x是一个常量
        resolve(x)
    }
}

class Promise{
    constructor(executor){
        this.status = 'pedding';
        this.value;
        this.reason;
        this.resolveCallbacks = [];
        this.rejectCallbacks = [];
        let resolve = (value)=>{
            if(this.status == 'pedding'){
                this.value = value
                this.status =  'success'
                this.resolveCallbacks.forEach(fn=>fn())
            }
        }
        let reject = (reason)=>{
            if(this.status == 'pedding'){
                this.reason = reason
                this.status = 'error'
                this.rejectCallbacks.forEach(fn=>fn())
            }
        }
        //2）执行时发生异常
        try{
            executor(resolve,reject)
        }catch(e){
            reject(e)
        }
    }
    
    then(onfulfilled,onrejected){
        // onfulfilled onrejected 有可能不是个函数，没有任何操作 会穿透到下一个 (可选参数)
        onfulfilled = typeof onfulfilled === "function" ? onfulfilled : value=>value;
        onrejected = typeof onrejected === "function" ? onrejected : err => {throw err};
        let promise2;
        // 调用then后必须返回一个新的promise;;
        promise2 = new Promise((resolve,reject)=>{
            if(this.status == 'success'){
                setTimeout(()=>{
                    try {
                        let x = onfulfilled(this.value)
                        // resolve(x)   //x不一定是个常量 ，有可能是个promises
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)
            }
            if(this.status == 'error'){
                setTimeout(()=>{
                    try {
                        let x = onrejected(this.reason)
                        resolvePromise(promise2,x,resolve,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)
            }
            if(this.status == 'pedding'){
                this.resolveCallbacks.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = onfulfilled(this.value)
                            resolvePromise(promise2,x,resolve,reject)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
                this.rejectCallbacks.push(()=>{
                    setTimeout(()=>{
                        try {
                            let x = onrejected(this.reason)
                            resolvePromise(promise2,x,resolve,reject)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
            }
        })
        return promise2;
    }
}

// 测试promise 是否能跑通  暴露一个方法 这个方法必须返回一个对象   对象含有 promise  resolve  reject 

Promise.defer = Promise.deferred =  function(){
    let dfd ={};
    dfd.promise = new Promise((resolve,reject)=>{
        dfd.resolve = resolve;
        dfd.reject = reject;
    })
    return dfd;
}


module.exports =  Promise;

// 全局安装测试工具 npm install promises-aplus-tests -g
// promises-aplus-tests 文件名