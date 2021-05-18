## 如何更好地处理Async/Await的异常的

```
try {
    const data = await asyncFn()
    /* do sth w/ data */
} catch (err) {
    /* handle err */
}
const [data, err] = await asyncFn()
if (data) {
    /* do sth w/ data */
} else {
    /* handle err */
}
```