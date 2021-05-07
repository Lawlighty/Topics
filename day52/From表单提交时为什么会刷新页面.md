##  From表单提交时为什么会刷新页面

### Why
因为早期网页交互模型只能是浏览器提交数据给服务器，服务器做出响应重新返回一个页面，浏览器加载这个页面进行显示。早期前端没有编程式发送网络请求的 API，更没有前端路由管理的概念，所以表单提交跳转页面是广泛接受的方案。

### How

> 不想刷新可以使用 JS 拦截 form 的 onsubmit 事件，阻止掉浏览器的默认行为，然后用 ajax/fetch 和后台交互

* 将`<input>`标签内的按钮类型从 type="submit" 修改为type="button"
* 表单内的`<button>`未指定类型，默认的类型为submit (除了IE浏览器是 button)， 可以显示的修改为`<button type="button"></button>`来阻止表单提交事件
* 事件阻止： preventDefault()