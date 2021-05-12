## js的函数有哪几种调用形式

function fn(){}

* 正常的函数调用
   fn()

* 作为对象方法调用
    let obj = {fn:function(){}};
    obj.fn()

* 使用构造函数调用
new fn()
* 使用call或apply调用
fn.call() || fn.apply()