
// 1. object.hasOWnProperty()  返回布尔值，查看对象的自带属性
// function a (){
//     this.name = "jack",
//     this.age = "12",
//     this.sayhi()= function(){
//         console.log('hi')
//     }
// }
// a.prototype.saygoodbye =function(){
//     console.log('bye')
// }
// a.hasOwnProperty('name');   //true
// a.hasOwnProperty('saygoodbye'); //false
// 2. 值类型和引用类型   
//    值类型是基本类型包括：string,number,boolean,undefined,null, 这些都存在栈中，不会改变值；
//    引用类型包括 object,funciton,array, name和value堆地址存在栈中，value堆地址在堆中,存入值；

// 3. 如何区分深拷贝与浅拷贝，简单点来说，就是假设B复制了A，当修改A时，看B是否会发生变化，如果B也跟着变了，说明这是浅拷贝，拿人手短，如果B没变，那就是深拷贝.
// 4. 浅拷贝(引用类型) 会使复制过的对象和原始对象指向同一个内存地址，所以原始对象改变了 复制后的也跟着改变 
// 5. 浅拷贝实现方法 (1) for...in 进行第一层遍历
                        var obj = {a:1,b:[1,2,3]};
                        var obj2 = shallowcopyobj(obj);
                        function shallowcopyobj(srcobj){
                            var o = Array.isArray(srcobj) ? [] : {};
                            for(var prop in srcobj){
                                if(srcobj.hasOwnProperty(prop)){
                                    o[prop] = srcobj[prop]
                                }
                            }
                            return o;
                        }
                        obj.b[1] = 10;
                        obj2.b[1]   // 10;
//                  (2) Object.assign(target,source1,....)  es6新增对象方法 用于将源对象（source1，....）的可枚举属性复制到目标对象中
                        var obj = {a:1,b:2};
                        var obj2 = Object.assign({},obj);
                        obj2.a =2;
                        obj.a;  //1    深拷贝  当对象只有一级属性的时候就是深拷贝

                        var obj = {a:{name:'jack'},b:3}
                        var obj2 = Object.assign({},obj);
                        obj2.a.name =2;
                        obj.a.name;  // 2  但是对象中有对象的时候，此方法，在二级属性以后就是浅拷贝。
//                  (3) 直接赋值
                        var obj = [1,2,3,4,5];
                        obj2=obj;
                        obj2[0] = 1;
                        obj[0];
// 6. 深拷贝的实现方法(1) 递归去拷贝每一层级属性
                        function deepCopy(srcobj){
                            var copyobj = Array.isArray(srcobj) ? [] : {} ;
                            // 判断srcobj 是不是一个object 
                            if(srcobj && typeof srcobj === "object"){
                                for(var key in srcobj){
                                    if(srcobj.hasOwnProperty(key)){
                                        // 判断第二层是否是一个object 
                                        if(srcobj[key] && typeof srcobj[key] === "object"){
                                            copyobj[key] = deepCopy(srcobj[key])
                                        }else{
                                            copyobj[key] = srcobj[key]
                                        }
                                    }
                                }
                            }
                            return copyobj;
                        }
                        let a=[1,2,3,4],
                        b=deepCopy(a);
                        a[0]=2;
                        console.log(a,b); 
//                  (2)使用JSON.stringify()将对象转化成字符串，再用JSON.parse() 将字符串转成新的对象
                        function deepCopy (obj){
                            var _obj = JSON.stringify(obj);
                            var obj2 = JSON.parse(_obj);
                            return obj2;
                        }
                        var a = {a:'1',b:'2'}
                        var b = deepCopy(a);
                        b.a = '2';
                        console.log(a,b) // a = {a:'1',b:'2'}  b = {a:'2',b:'2'}
//                  (3)使用jq的extend方法实现深拷贝   
                        let $ = require('jquery');
                        var obj1 = {
                            a:'1',
                            b:'2',
                            c:{
                                d:'3',
                                e:{
                                    f:'4'
                                }
                            },
                            g:[1,2,3]
                        }
                        var obj2 = $.extend(true,{},obj1) // true为深拷贝，false为浅拷贝
//                  (4)使用lodash.cloneDeep()实现深拷贝       lodash 是一个js工具库     lodash.clone()浅拷贝          
                        let _ = require('lodash');
                        var obj1 = {
                            a:'1',
                            b:'2',
                            c:{
                                d:'3',
                                e:{
                                    f:'4'
                                }
                            },
                            g:[1,2,3]
                        }
                        var obj2 = _.cloneDeep(obj1) 