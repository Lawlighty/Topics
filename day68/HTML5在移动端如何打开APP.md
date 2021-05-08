## HTML5在移动端如何打开APP

> Android 是利用 deeplink， iOS 是利用 URL Schemes

```
<a href="zhihu://">打开知乎</a>
```

以上 a标签 触发的 在微信内置浏览器中是无效的
可以使用 微信的开发标签实现 唤起app