## document的load 和ready有什么区别

主要执行顺序的区别，load：页面资源加载完成； ready：是dom加载完成。

一般我们都在js脚本都写在onload 保证dom节点都能获取。但是有时只需要dom节点加载完成就执行代码，提前执行js脚本就可放到ready里面 jQuery也为此提供了onReady方法