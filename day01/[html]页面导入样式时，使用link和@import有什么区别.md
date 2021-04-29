### link和@import有什么区别
* link是XHTML标签，除了加载CSS外，还可以定义RSS等其他事务；@import属于CSS范畴，只能加载CSS。
* link引用CSS时，在页面载入时同时加载；@import需要页面网页完全载入以后加载。所以会出现一开始没有css样式，闪烁一下出现样式后的页面(网速慢的情况下)
* link是XHTML标签，无兼容问题；@import是在CSS2.1提出的，低版本的浏览器不支持。
* link支持使用Javascript控制DOM去改变样式；而@import不支持。在html设计制作中，css有四种引入方式。

### CSS的引入方式
 * 内联样式
 > 内联样式，也叫行内样式，指的是直接在 HTML 标签中的 style 属性中添加 CSS
  ```
  <div style="display: none;background:red"></div>
  ```
 * 嵌入样式
 > 嵌入方式指的是在 HTML 头部中的 &lt;style&gt; 标签下书写 CSS 代码。
  ```
  <head>
    <style>
      .content {
         background: red;
       }
    </style>
</head>
  ```
* 链接样式
 > 链接方式指的是使用 HTML 头部的 标签引入外部的 CSS 文件。
  ```
  <head>
    <link rel="stylesheet" type="text/css" href="style.css">
  </head>
  ```
  * 导入样式
 > 导入方式指的是使用 CSS 规则引入外部 CSS 文件。
  ```
  <style>
    @import url(style.css);
</style>
 或者写在css样式中
 @charset "utf-8";
@import url(style.css);
*{ margin:0; padding:0;}
.notice-link a{ color:#999;}
  ```