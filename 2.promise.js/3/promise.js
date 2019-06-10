function reslovePromise(promise2,x,reslove,reject){
    // console.log(promise2)
    // 判断x的类型 如果是常量 则promise成功  如果是promise 则promise的结果
    if(typeof(x) === ){
        reslove(x)
    }
}

class Promise{
    constructor(executor){
        this.status = 'pedding';
        this.value;
        this.reason;
        this.resloveCallbacks = [];
        this.rejectCallbacks = [];
        let reslove = (value)=>{
            if(this.status == 'pedding'){
                this.value = value
                this.status =  'success'
                this.resloveCallbacks.forEach(fn=>fn())
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
            executor(reslove,reject)
        }catch(e){
            reject(e)
        }
    }
    
    then(onfulfilled,onrejected){
        let promise2;
        // 调用then后必须返回一个新的promise;;
        promise2 = new Promise((reslove,reject)=>{
            if(this.status == 'success'){
                setTimeout(function(){
                    try {
                        let x = onfulfilled(this.value)
                        reslovePromise(promise2,x,reslove,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)
            }
            if(this.status == 'error'){
                setTimeout(function(){
                    try {
                        let x = onrejected(this.reason)
                        reslovePromise(promise2,x,reslove,reject)
                    } catch (error) {
                        reject(error)
                    }
                },0)
            }
            if(this.status == 'pedding'){
                this.resloveCallbacks.push(()=>{
                    setTimeout(function(){
                        try {
                            let x = onfulfilled(this.value)
                            reslovePromise(promise2,x,reslove,reject)
                        } catch (error) {
                            reject(error)
                        }
                    },0)
                })
                this.rejectCallbacks.push(()=>{
                    setTimeout(function(){
                        try {
                            let x = onrejected(this.reason)
                            reslovePromise(promise2,x,reslove,reject)
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
module.exports =  Promise;