## 有用过HTML5中的datalist标签吗

datalist是HTML5新增的标签 用于在用户输入时给出一批建议数据 如果需要用到datalist 请给对应的input的list属性和datalist的ID属性设置上一样的属性值 datalist给出的选项用option包裹 选项值用option的value属性给出。datalist支持全局属性和事件属性。

```
<input list="browsers">
<datalist id="browsers">
  <option value="Internet Explorer">
  <option value="Firefox">
  <option value="Chrome">
  <option value="Opera">
  <option value="Safari">
</datalist>
```