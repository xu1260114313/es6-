/*
  语法：
    Object.entries(obj)
  参数：
    (obj：可以返回其可枚举属性的键值对的对象)
  返回值:
    给定对象自身可枚举属性的键值对数组
*/

const obj = { foo: 'bar', baz: 42 };
console.log('[Object.entries(obj)]：',Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

const obj1 = { 0: 'a', 1: 'b', 2: 'c' };
console.log('[Object.entries(obj1)]：', Object.entries(obj1)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

const anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log('[Object.entries(anObj)]：',Object.entries(anObj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

const myObj = Object.create({}, { getFoo: { value() { return this.foo; } } });
myObj.foo = 'bar';
console.log('[Object.entries(myObj)]：', Object.entries(myObj)); // [ ['foo', 'bar'] ]

console.log('[Object.entries(\'foo\')]：', Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

const obj2 = { a: 5, b: 7, c: 9 };
for (const [key, value] of Object.entries(obj2)) {
  console.log(`[obj2(key:value)]： ${key} ${value}`); // "a 5", "b 7", "c 9"
}
// 或者用数组的forEach遍历方式
console.log('-----以下是数组forEach遍历：-----')
Object.entries(obj2).forEach(([key, value]) => {
    console.log(`[obj2(key:value)]： ${key} ${value}`); // "a 5", "b 7", "c 9"
});