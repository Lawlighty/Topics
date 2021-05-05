## bind、call、apply的区别？并手写实现一个bind的方法

> bind, call, apply 三者都可以改变 this 的指向。
其中 call 和 apply 为立即执行，两者效果等价，只有在传參形式上有所区别。call 需要把参数一个一个传入 fun.call(obj, arg1, arg2, arg3,...) 而 apply 接受一个数组作为参数 fun.apply(obj, [arg1, arg2, arg3, ...])。

bind 则是延时执行。const fb = fun.bind(obj) fb(arg1, arg2, ...) 在使用 bind 之后，只会返回一个修改了作用域的函数，等再次调用时才会执行
call和apply都是为了解决改变this的指向。作用都是相同的，只是传参的方式不同。

除了第一个参数外，call可以接收一个参数列表，apply只接受一个参数数组。 bind绑定完之后返回一个新的函数，不执行。

```
Function.prototype.myCall = function (context = window) {
  context.fn = this;

  var args = [...arguments].slice(1);

  var result = context.fn(...args);
  // 执行完后干掉
  delete context.fn;
  return result;
}
```

```
Function.prototype.myApply = function (context = window) {
  context.fn = this;

  var result
  // 判断 arguments[1] 是不是 undefined
  if (arguments[1]) {
    result = context.fn(...arguments[1])
  } else {
    result = context.fn()
  }

  delete context.fn
  return result;
```

```
Function.prototype.myBind = function (context) {
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }
  var _this = this
  var args = [...arguments].slice(1)
  // 返回一个函数
  return function F() {
    // 因为返回了一个函数，我们可以 new F()，所以需要判断
    if (this instanceof F) {
      return new _this(...args, ...arguments)
    }
    return _this.apply(context, args.concat(...arguments))
  }
}
```