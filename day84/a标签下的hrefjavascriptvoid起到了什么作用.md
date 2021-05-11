## a标签下的href="javascript:void(0)"起到了什么作用

> 当用户点击一个以 javascript: URI 时，它会执行URI中的代码，然后用返回的值替换页面内容，除非返回的值是undefined。void运算符可用于返回undefined。(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/void#JavaScript_URIs)

* void关键字在js的含义为执行一个表达式，但不会返回任何值（即undefined）；因此void(0)语句相当于执行表达式0，然后不返回任何值；
* 综上，href="javascript:void(0)"的作用是点击链接后不发生任何行为，常用于阻止页面刷新或跳转；