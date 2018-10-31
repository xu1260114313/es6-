/*
  语法：
    Object.is(value1, value2);
  参数：
    (value1：需要比较的第一个值)
    (value2：需要比较的第二个值)
  返回值:
    表示两个参数是否相同的Boolean
*/

/*
    比较规则：
        -两个值都是 undefined
        -两个值都是 null
        -两个值都是 true 或者都是 false
        -两个值是由相同个数的字符按照相同的顺序组成的字符串
        -两个值指向同一个对象
        -两个值都是数字并且
            ·都是正零 +0
            ·都是负零 -0
            ·都是 NaN
            ·都是除零和 NaN 外的其它同一个数字
    
    *与运算符(== | ===)不同，===运算符（和==运算符）将数字值-0和+0视为相等，并认为Number.NaN不等于NaN
*/


Object.is('foo', 'foo');     // true
Object.is(window, window);   // true

Object.is('foo', 'bar');     // false
Object.is([], []);           // false

var test = { a: 1 };
Object.is(test, test);       // true
Object.is({}, {});           // false

Object.is(null, null);       // true

// 特例
Object.is(0, -0);            // false
Object.is(-0, -0);           // true
Object.is(NaN, 0/0);         // true
