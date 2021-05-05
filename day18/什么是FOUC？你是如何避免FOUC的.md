## 什么是FOUC？你是如何避免FOUC的
FOUC 即 Flash of Unstyled Content，是指页面一开始以样式 A（或无样式）的渲染，突然变成样式B。
原因是样式表的晚于 HTML 加载导致页面重新进行绘制。


* 确保样式表最先渲染
* 通过 @import 方式导入样式表
* style 标签在 body 中
* 使用 link 链接css 并放在head中