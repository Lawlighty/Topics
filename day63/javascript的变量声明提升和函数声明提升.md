## javascript的变量声明提升和函数声明提升

### 变量声明
```
console.log(a);// undefinde
var a= "hello world";
console.log(a);//  "hello world"
```
### 函数声明
```
f()
function f(){
    console.log('hello world');// "hello world"
}
```

> 变量声明只提升声明 不提升赋值操作，函数声明 函数体整体被提升。

```
getName();
var  getName = function(){
    console.log("小明");
}
function getName(){
    console.log("大明");
}
getName();
```
提升之后变成：
```
var getName;
function getName(){
    console.log("大明");
}
getName();//”大明“
getName= function(){
    console.log("小明");
}
getName();//"小明"
```