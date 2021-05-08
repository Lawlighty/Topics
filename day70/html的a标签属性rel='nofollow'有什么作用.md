## html的a标签属性rel='nofollow'有什么作用
> 告诉爬虫，别往下走了，防止爬虫跳出自己的站点。
爬虫默认遇见链接，会继续爬取链接的内容。

```
nofollow有两种用法：
1.用于meta元标签：
<meta name="robots" content="nofollow" />
告诉爬虫该页面上所有链接都无需追踪。
2.用于a标签：
<a href="login.aspx" rel="nofollow">登录</a>
告诉爬虫该页面无需追踪
```