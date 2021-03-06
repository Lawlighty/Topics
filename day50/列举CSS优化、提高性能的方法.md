## 列举CSS优化、提高性能的方法
### 加载性能
* 压缩CSS
* 通过link方式加载，而不是@import
  > 为什么 通过link方式加载，而不是@import?
link是HTML提供的标签,加载页面时，link标签引入的 CSS 被 同时 加载；
@import是 CSS 提供的语法规则，只有 导入 样式表的作用；
@import引入的 CSS 将在页面加载完毕后被加载。网络不好的情况下,页面加载过慢,会出现闪烁,混乱的情况

* 复合属性其实分开写，执行效率更高，因为CSS最终也还是要去解析如 `margin-left: left`;


### 选择器性能
* 尽量少的使用嵌套，可以采用BEM的方式来解决命名冲突
* 尽量少甚至是不使用标签选择器，这个性能实在是差，同样的还有*选择器
* 利用继承，减少代码量


### 渲染性能
* 慎重使用高性能属性：浮动、定位；
* 尽量减少页面重排、重绘；
* css雪碧图
* 自定义web字体，尽量少用
* 尽量减少使用昂贵属性，如box-shadow/border-radius/filter/透明度/:nth-child等
* 使用transform来变换而不是宽高等会造成重绘的属性