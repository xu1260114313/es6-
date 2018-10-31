/*
  语法：
    Object.assign(target, ...sources)
  参数：
    (target：目标对象)
    (sources：源对象)
  返回值:
    目标对象
*/


const object1 = {
    a: 1,
    b: 2,
    c: 3
};
  
const object2 = Object.assign({c: 4, d: 5}, object1);

console.log(`[object2.c]：${object2.c}`); //3
console.log(`[object2.d]：${object2.d}`); //5
console.log(`[object1]：${JSON.stringify(object1)}`); //object1 {"a":1,"b":2,"c":3}
console.log(`[object2]：${JSON.stringify(object2)}`); //object2 {"c":3,"d":5,"a":1,"b":2}


// *如果源对象的属性值是指向对象的一个引用，它也只拷贝那个引用值
console.log('-----------以下是关于源对象的属性值指向对象的一个引用--------------')
let obj1 = { a: 0 , b: { c: 0}};
let obj2 = Object.assign({}, obj1);
console.log(`[obj2]：${JSON.stringify(obj2)}`); // {"a":0,"b":{"c":0}}
obj2.b.c = 4;
console.log(`[obj1]：${JSON.stringify(obj1)}`) // {"a":0,"b":{"c":4}}
console.log(`[obj2]：${JSON.stringify(obj2)}`) // {"a":0,"b":{"c":4}}
console.log('-----解决办法：对目标对象进行字符串序化将其变成json字符串，然后再进行反序列化，将目标对象变成json对象-----')
let obj3 = { a: 0 , b: { c: 0}};
let obj4 = JSON.parse(JSON.stringify(Object.assign({}, obj3)));
obj4.b.c = 3;
console.log(`[obj3]：${JSON.stringify(obj3)}`);
console.log(`[obj4]：${JSON.stringify(obj4)}`);



