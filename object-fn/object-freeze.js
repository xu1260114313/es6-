/*
  语法：
    Object.freeze(obj)
  参数：
    (obj：要被冻结的对象)
  返回值:
    被冻结的对象
*/

const object1 = {
    property1: 42
};

const object2 = Object.freeze(object1);

delete object2.property1
object2.property1 = 33;
object2.property2 = 34;


console.log(`[object2.property1]：${object2.property1}`);  //42
console.log(`[object2.property2]：${object2.property2}`);  //undefined