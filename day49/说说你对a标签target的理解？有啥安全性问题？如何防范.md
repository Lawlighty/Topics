## 说说你对target="_blank"的理解？有啥安全性问题？如何防范

### 问题
在调用window下的open方法创建一个新窗口的同时，可以获得一个创建窗口的opener句柄，通过target="_blank"点开的窗口活着标签页，子窗口也能捕获opener句柄，通过这个句柄，子窗口可以访问到父窗口的一些属性，虽然很有限，但是却可以修改父窗口的页面地址，让父窗口显示指定的页面。

### 防范

如果需要限制window.opener的访问行为，我们只需要在原始页面每个使用了target="_blank"的链接中加上一个rel="noopener"属性。
但是，火狐并不支持这个属性值，火狐浏览器里需要写成rel="noreferrer"，所以我们可以将两个属性值合并写成rel="noopener noreferrer"来完整覆盖。
`<a href="https://www.baidu.com" target="_blank" rel="noopener noreferrer nofollow">内容</a>`
> nofollow 是HTML页面中a标签的属性值。这个标签的意义是告诉搜索引擎"不要追踪此网页上的链接或不要追踪此特定链接"。