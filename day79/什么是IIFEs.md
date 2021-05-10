## 什么是IIFEs

Instantly Invoked Function Expression 即时调用函数表达式

```
;(function () {
    // ... statements
    return ...
)()
```
* 最好在 IIFE 前追加分号 ; 来避免解析时与前一个表达式合并出现问题
* 创建一个局部作用域隔离变量；但在 ES6 拥有了块级作用域后变得没有必要，可以用语句块 { ... } 配合 let/const 替代
* 将运行逻辑转化为可求值的表达式，弥补 JavaScript 基本逻辑语句不是表达式的缺陷

```
const a = (() => {
    if (...) return 1
    else return 0
})()
```
等价于
```
let a
if (...) a = 1
else a = 0
```
