### valueOf
>  返回对象的值，默认情况下返回对象本身

```
var obj = new Object()
  
console.log(obj.valueOf());//返回Object
console.log(obj.valueOf()===obj);//返回true

//重写valueOf
obj.valueOf = function(){
	return 2;
}

console.log(1+obj); //返回3
```

### toString
>  返回对象的字符串形式，默认情况下返回类型字符串 

```
var a={a:1}
console.log(a.toString());//返回[object Object]
console.log(a.toString() === a);//返回false

//重写toString
a.toString=function(){
	return 'wo'
}
console.log(a.toString())//返回wo

//数组调用toString，返回由数组中每个值的字符串形式拼接而成的一个以逗号分割的字符串
var arr = [1,2,3];
console.log(arr.toString());//返回1,2,3

//函数调用toString
console.log((function(){
	return 'wo'
}).toString());  //输出表达式function(){return 'wo'}


//日期类型调用toString
console.log(new Date().toString());//返回当前时间的描述Sun Jun 14 2020 12:45:14 GMT+0800 (中国标准时间)
```

### 共同点：在 JavaScript 中，toString()方法和valueOf()方法，在输出对象时会自动调用
### 不同点：二者并存的情况下，在数值运算中，优先调用了valueOf，字符串运算中，优先调用了toString
### 返回值类型的差别： toString vs valueOf的差别:
* toString一定将所有内容转为字符串
* valueOf取出对象内部的值，不进行类型转换
  
### 用途的差别:
* valueOf专用于算数计算和关系运算
* toString专用于输出字符串

### 共同的缺点：无法获取null和undefined的值
```
let a = [null, undefined]
a.toString()--->","
a.valueOf()--->[null, undefined]

let b = {name:null, age:undefined}
b.toString()--->"[object Object]"
b.valueOf()--->{name: null, age: undefined}
```