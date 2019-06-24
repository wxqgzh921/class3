// 如何要obj 更新内容后update()

function update(val){
    console.log('我改了值'+val)
}
let obj = {
    name: 'qq',
    age:{name:1000}
}

function observer(obj){
    if(typeof obj === "object" && obj != null){
        for(let key in obj){
            defineReactive(obj,key,obj[key])
        }
    }
}
function defineReactive(obj,key,value){
    observer(value)
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            update(val)
            value = val
        }
    })
}
observer(obj)
obj.name = 'ff'