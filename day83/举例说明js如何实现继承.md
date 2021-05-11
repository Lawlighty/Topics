## 举例说明js如何实现继承
JavaScript 使用基于原型链的继承。访问一个对象的属性时若该属性在对象上不存在，则会沿原型链向下搜寻每个原型对象。

每个构造器都拥有 prototype 属性，代表该构造器的原型对象，初始为一个 Object 实例。所有用此构造器 new 出的对象都可以访问该对象的属性。
```
function Foo(bar) { this.bar = bar }
Foo.prototype.baz = 'test'
let qux = new Foo('hello')
qux.bar // => 对象本身的属性：'hello'
qux.baz // => 对象原型链上 Foo 的原型属性：'test'
// qux 的原型链：(qux ->) Foo.prototype -> Object.prototype
```

如果一个构造器 A 的 prototype 属性是另一个构造器 B 的实例，那么 B 的原型链会被接到 A 上，此时我们就说 A 继承了 B，A 实例可以访问所有 B 原型链上的属性。

```
function Foo2() {}
Foo2.prototype.baz2 ='test2'
Foo2.prototype = new Foo() // 将 Foo 的原型链接到 Foo2 上。Foo 来自上一个例子
qux = new Foo2()
qux.baz // 原型链上 Foo 的原型属性：'test'
qux.baz2 // 原型链上 Foo2 的原型属性：'test2'
// qux 的原型链：(qux ->) Foo2.prototype -> Foo.prototype -> Object.prototype
```