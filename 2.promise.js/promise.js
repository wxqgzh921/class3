class Promise{
    constructor(executor){
        this.status = 'pedding';
        this.value;
        this.reason;

        let reslove = (value)=>{
            if(this.status == 'pedding'){
                this.value = value
                this.status =  'success'
            }
        }
        let reject = (reason)=>{
            if(this.status == 'pedding'){
                this.reason = reason
                this.status = 'error'
            }
        }
        executor(reslove,reject)
    }
    
    then(onfulfilled,onrejected){
        if(this.status == 'success'){
            onfulfilled(this.value)
        }
        if(this.status == 'error'){
            onrejected(this.reason)
        }
    }
}
module.exports =  Promise;