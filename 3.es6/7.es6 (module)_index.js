// export let a = 1 ;
// export let b = 2 ;

let a =1 ;
let b =2 ;
export{
    a, // a as c  给a更改名字
    b
}
// export 能导出一个固定的接口  export default导出一个固定的值
export default 'hello'  //导出hello这个值

export {a,b} from './b'  // 从b中引入并导出