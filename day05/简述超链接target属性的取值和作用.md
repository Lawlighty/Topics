## 简述超链接target属性的取值和作用
* _self
  > 默认属性。在当前窗口或者框架中加载目标文档。

* _blank
  > 打开新的窗口或者新的标签页。在使用这个属性时，最好添加 `rel="noopener norefferrer"` 属性，防止打开的新窗口对原窗口进行篡改。防止 window.opener API 的恶意行为

* _parent
  > 在 <b>frame</b> 或者 <b>iframe</b> 中使用较多。在父级框架中载入目标文档，当 `a` 标签本身在顶层时，与 `_self` 相同

* _top
  > 在 `frame` 或者 `iframe` 中使用较多。直接在顶层的框架中载入目标文档，加载整个窗口。