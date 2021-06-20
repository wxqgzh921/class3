// 数组去重
function removeRepeat(){
    var arr = [].concat.apply([],arguments);
    return Array.from(new Set(arr));
}
var arr1 = [1,2,3] ;  var arr2 = [3,4,5];
removeRepeat(arr1,arr2);   //[1,2,3,4,5]

const mapper = new Map([['1','a'],['2','b']]);
console.log(Array.from(mapper.values()));   //['a','b']
console.log(Array.from(mapper.keys())); //['1','2']

const setter = new Set([1,2,3,4,2,6,7]);
console.log(setter);  // {1,2,3,4,6,7}   
console.log(Array.from(setter)); //[1,2,3,4,6,7]