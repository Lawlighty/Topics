## 遇到过IE6/7/8/9的BUG及解决方法

兼容性问题
1. IE6margin双边距问题
2. IE67 li间隙问题
3. 图片间隙问题——vertical-align：top
4. ie6下高度小于19px处理成19px；font-size:0;或者overflow：hidden
5. ie8以下滤镜问题，filter:alpha(opacity=50)
6. IE6 position:fixed 不兼容，fixed定位ie6兼容，js处理，通过获取滚动高度，赋值给需要固定的元素，设置绝对定位，设置top
7. ie6下父级的overflow：hidden是保不住子级的相对定位的（relative）-解决，给父级加定位
8. ie6下，绝对定位的父级，宽高是奇数的话，定位偏移会出现1px的偏差
9. ie6下，内容会撑开设置好的宽度
10. ie6，7 3px问题
11. `<p><h3></h3></p>`会把p元素分割成两个，原因，嵌套的规范性，p需要嵌套inline元素
12. 在ie6下，1px dotted #0 不兼容。精度问题，可以用背景平铺
13. ie6下margin传递需要触发haslayout，父级有边框时，子元素margin值消失，解决办法，触发父级haslayout
14. ie6下当一行子元素占有的宽度之和与父级的宽度相差超过3px或者有不满行状态的时候，最后一行子元素的下margin就会失效
15. ie6下的文字溢出bug 条件1，子元素的宽度和父级的宽度相差小于3px的时候，2，两个浮动元素中间有注释或内联元素——解决办法：用div吧注释或内联元素包裹起来
16. ie6下，当浮动元素和绝对定位元素是并列关系的时候，绝对定位会消失，解决办法：给定位元素外面包裹div
17. ie6，7下，输入类型的表单控件上下各有1px的间隙——解决办法：给input加浮动
18. ie6，7下，输入类型的表单控件加border：none无效，还是会出现边框——解决办法：1，给border：0；2，重置input的背景
19. ie6，7下，输入类型的表单控件输入文字的时候，背景图片会跟随移动——解决办法：把背景加给父级
20. 处理ie6 png图片兼容问题js插件，DD_belatedPNG.js,也可以用CSS滤镜处理
a. css处理
b. 微软behavior扩展，下载iepngfix.htc
c. js插件
21. css hack \9——IE10之前的浏览器解析，+，*——IE7包括IE7之前的浏览器解析， _ ——IE6包括IE6之前的IE浏览器
22. important兼容问题，在IE6下，在important后面加一条同样的样式，会破坏important优先级作用，按照默认的优先级顺序来走
23. IE6 margin负值不兼容，处理，只要position：relative；这个解决方案在圣杯布局中有出现。圣杯布局，可以用position：absolute；来定位