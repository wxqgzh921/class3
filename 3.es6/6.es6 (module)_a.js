// es6的模块  浏览器用
// 常见的模块 commonjs规范 es6module 
// es6 模块静态模块  只能在顶级作用域

// 模块系统中 每个文件都是一个模块 模块与模块之间都是相互独立的
// export 导出模块  import 导入模块
// import 语法可有声明的作用 var的特点  变量提升 但是不能更改变量的值
// as 可更改名字 更改导出的名字 //  import {c as a,b} from './7.es6 (module)_index'

// import {a,b} from './7.es6 (module)_index'  
// import * as obj from './7.es6 (module)_index'  // 把属性都放在obj中
// console.log(obj.a,b)

// 如果遇到export default  //import xxx from './xxx'

import {a,b,defalut as e} from './7.es6 (module)_index'  //import _,{a,b,defalut as e} from './7.es6 (module)_index'  _相当于把默认的拿出来
console.log(e) // 'hello'  console.log(e,_)