## 写例子说明如何给li绑定事件（ul下有1000+个li）

> 这题明显考的是事件委托，利用事件冒泡的原理把事件绑定到父元素，在父元素识别是哪个子元素触发。


* 在不考虑任何情况时，直接使用 $('li').addEventListener(event, fun) 就可以对 li 进行事件绑定。

* 当子元素过多时，可以利用“事件冒泡”在 ul 上进行绑定，实现事件委托。可以利用 event.target 对被触发的子元素进行操作。
  
```
document.getElementsByTag('ul')[0].addEventListener('event', (e) => {
	// 利用 e.target 对冒泡上来的元素做区分
	// e.target.nodeName, e.target.id 等
})
```