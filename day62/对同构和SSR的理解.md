## 对同构和SSR的理解

Isomorphism, 同构，指一套代码既可以在server端工作，也可以在web 客户端运行，可以无缝在server端和client端渲染两种模式间切换。这个概念由airbnb的Rendr发扬光大。
所以一楼说的其实指的并不是同构JS，而是Universal Javascript.

在PWA 大行其道的环境下，因为爬虫需要和框架初始化容易白屏等等问题，服务端渲染的呼声又物论沸腾。SSR其实就是在server端把需要的页面和数据组装起来发给客户端而已。

SSR的好处

* SEO友好
* 首页加载更快
* 减少请求

> SSR和SPA不是相对概念
> 
> SPA对应的是MPA,即多页应用,指的是多个入口的前端应用.之前php之类的基本上是多页应用,路由是交给后端处理的.
> 
> SSR是server side rendering,对应的应该就是client side rendering.这里rendering指的是将数据填入前端模板的过程(大概,我自己想的).
> 
>不用SSR的话基本上是在客户端通过Api拉取数据然后通过不同的方式(之前的JQuery操作dom,现在react,vue的绑定)将数据呈现在页面上.