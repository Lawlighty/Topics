## 用js写出死循环的方法有哪些

> 循环如果能结束就不是死循环，即设置一个永远达不到的结束条件就能造成死循环。
> 
```
while (true) {}

for (let i = 0; i > 0; i++) {}

// 这个等价于 while
for (;;) {}

let i = 0;
do {
  i++;
} while (i > 0);

// 不设置结束条件
function fn(a) {
  console.log(a);
  fn(a)
```