## position:fixed;在ios下无效该怎么办
* 当采用 fixed 做吸底、吸顶布局时，如果触发键盘弹出事件则 fixed 属性会失效，布局就会被扰乱。其原因解释如下：
  
> 软键盘唤起后，页面的 fixed 元素将失效（即无法浮动，也可以理解为变成了 absolute 定位），所以当页面超过一屏且滚动时，失效的 fixed 元素就会跟随滚动了。

* fixed失效图片![fixed失效图片](https://camo.githubusercontent.com/671fd2a17aac46ba6886b5ed16cbbb852d66dcc6911a9561b7a691d333b5563e/68747470733a2f2f6566652e62616964752e636f6d2f626c6f672f6d6f62696c652d66697865642d6c61796f75742f696d672f66697865645f6275675f302e706e67)
  
*  fixed有效图片![fixed有效图片](https://camo.githubusercontent.com/ddff8bfeae45895d653065e05d2f563fd622ec233e4c69e236a6997d2904dff1/68747470733a2f2f6566652e62616964752e636f6d2f626c6f672f6d6f62696c652d66697865642d6c61796f75742f696d672f66697865645f6275675f312e706e67)

### 解决的思路就是避免最外层出现滚动，即最外层使用 fixed 并且不让其可以滚动。让滚动仅在内部内容部分。

```
把需要用手滑动的内容用clss为.content（名字随便起）的div包起来，样式代码如下：

.content {
position: fixed;
top: 0;
left: 0;
bottom: 180px; /距离底部的距离为底部盒子的高度，自己也可以设置/
overflow-y: scroll;
width: 100%;
height: auto;
-webkit-overflow-scrolling: touch; /这句是为了滑动更顺畅/
}
-webkit-overflow-scrolling: touch; /这句是为了滑动更顺畅/
这句代码一定得写，要不上下滑动起来有些卡顿，亲自体验过的。
然后把需要固定在底部的内容用class为.footer（名字随便起）的div包起来，样式代码如下：

.footer {
position: fixed;
bottom: 0;
height: 180px;
}
```