## var x, y = 1; x + y =
```
x // => undefined
y // => 1
x + y // => undefined + 1 => NaN
```

运算符 + 的implicit type conversion规则：

* 若任何一侧是 string 或 object 则两边转换为 string 进行连接
* 否则均转换为 number 并进行相加
* 注意symbol 相加会 throw TypeError

### 正确的 声明
> var x=1, y = 1; x + y =>2