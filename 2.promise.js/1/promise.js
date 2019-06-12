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
        if(this.status == 'success'){
            onfulfilled(this.value)
        }
        if(this.status == 'error'){
            onrejected(this.reason)
        }
        if(this.status == 'pedding'){
            this.resloveCallbacks.push(()=>{
                onfulfilled(this.value)
            })
            this.rejectCallbacks.push(()=>{
                onrejected(this.reason)
            })
        }
    }
}
module.exports =  Promise;