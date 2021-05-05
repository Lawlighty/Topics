## ::before和:after中单冒号和双冒号的区别是什么，这两个伪元素有什么作用？
* :表示伪类，是一种样式，比如:hover, :active等
* ::表示伪元素，是具体的内容，比如::before是在元素前面插入内容，::after则是在元素后面插入内容，不过需要content配合，并且插入的内容是inline的。
* :before和:after其实还是表示伪元素，在css3中已经修订为::before和::after了，只是为了能兼容IE浏览器，所以也可以表示成:before和:after

## 认识 :before 和 :after
* 默认 display: inline；
* 必须设置 content 属性，否则一切都是无用功， content 属性也只能应用在 :before 和 :after 伪元素上；
* 默认user-select: none，就是 :before 和 :after 的内容无法被用户选中；
* 伪元素可以和伪类结合使用形如：.target:hover:after。
* :before 和 :after 是在CSS2中提出来的，所以兼容IE8；
* ::before 和 ::after 是CSS3中的写法，为了将伪类和伪元素区分开；
* CSS 中其他的伪元素有：::before、::after、::first-letter、::first-line、::selection 等；
* 不可通过DOM使用，它只是纯粹的表象。在特殊情况下，从一个访问的角度来看，当前屏幕阅读不支持生成的内容。

### content 定义用法
content 属性与 :before 及 :after 伪元素配合使用，在元素头或尾部来插入生成内容。
> <b>说明</b>： 该属性用于定义元素之前或之后放置的生成内容。默认地，这往往是行内内容，不过该内容创建的盒子类型可以用属性 display 控制。

#### content: <string> value 字符串
> 可以加入任何字符，包括 Unicode 编码等各种字符。
```
<a class="demo" href="https://www.xunlei.com/" title="精彩，一下就有">精彩，一下就有</a>

.demo:after{
	content: "↗"
}
```

#### content: <uri> value 外部资源
> 用于引用媒体文件，图片，图标，SVG等。

```
.demo:after{
	content: url(https://img-vip-ssl.a.88cdn.com/img/xunleiadmin/5b9889e14dcdc.png);
}
```