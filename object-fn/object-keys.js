/*
  语法：
    Object.keys(obj)
  参数：
    (obj：要返回其枚举自身属性的对象)
  返回值:
    一个表示给定对象的所有可枚举属性的字符串数组
*/

var arr = ['a', 'b', 'c'];
console.log(`[Object.keys(arr)]：${Object.keys(arr)}`); // ['0', '1', '2']

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(`[Object.keys(obj)]：${Object.keys(obj)}`); // ['0', '1', '2']

var anObj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(`[Object.keys(anObj)]：${Object.keys(anObj)}`); // ['2', '7', '100']

var myObj = Object.create({}, {
    getFoo: {
        value: function () {
            return this.foo;
        },
        enumerable: false
    }
});
myObj.foo = 1;
console.log(`[Object.keys(myObj)]：${Object.keys(myObj)}`); // ['foo'], getFoo方法设置不可枚举，如果需要，请把enumerable属性值改为true;

/*
    *在ES5里，如果此方法的参数不是对象（而是一个原始值），
    那么它会抛出 TypeError。在ES2015中，非对象的参数将被强制转换为一个对象。
*/
console.log(`[Object.keys("foo")]：${Object.keys("foo")}`); // TypeError: "foo" is not an object (ES5 code)
console.log(`[Object.keys("foo")]：${Object.keys("foo")}`); // ["0", "1", "2"] (ES2015 code)