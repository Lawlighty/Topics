## JSON.stringify有什么局限性和哪些技巧

> JSON.stringify() 方法能将一个 JavaScript 对象或值转换成一个 JSON 字符串。

```

//初始化一个 user 对象
const user = {
"name": "Prateek Singh",
"age": 26
}
console.log(user);
// 结果
//[object object]


console.log(JSON.stringify(user));
// 结果
// "{ "name" : "Prateek Singh", "age" : 26 }"

```


### 第二个参数（数组）
> 它是要在控制台中打印的对象的键数组


```
console.log(JSON.stringify(product));
// {"id":"0001","type":"donut","name":"Cake","ppu":0.55,"batters":{"batter":[{"id":"1001","type":"Regular"},{"id":"1002","type":"Chocolate"},{"id":"1003","type":"Blueberry"},{"id":"1004","type":"Devil’s Food"}]},"topping":[{"id":"5001","type":"None"},{"id":"5002","type":"Glazed"},{"id":"5005","type":"Sugar"},{"id":"5007","type":"Powdered Sugar"},{"id":"5006","type":"Chocolate with Sprinkles"},{"id":"5003","type":"Chocolate"},{"id":"5004","type":"Maple"}]}


console.log(JSON.stringify(product,['name']);
// 结果
{"name": "Cake"}

```

### 第二个参数（函数）
> 它根据函数中写入的逻辑来计算每个键值对。如果返回 undefined，则不会打印键值对

```

const user = {
"name": "Prateek Singh",
"age": 26
}

JOSN.stringify(user, (k,v)=>{
    if(typeOf v === "string"){
        return undefined
    }
    return v
})


// 结果
{ "age": 26}

```