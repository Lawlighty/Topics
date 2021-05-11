## a标签的href和onclick属性同时存在时哪个先触发
```
<a href="javascript:alert(1)" onclick="alert(2)">点一下试试，看谁先触发</a>

<a href="javascript:alert(1)" onclick="alert(2);return false;">点一下试试</a>
```

onclik中使用preventDefault方法可以阻止a标签的跳转，说明a标签的跳转行为是一个默认行为
> `<a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a" onclick="event.preventDefault()">test</a>`