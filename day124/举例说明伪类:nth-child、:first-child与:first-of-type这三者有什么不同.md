## 举例说明伪类:nth-child、:first-child与:first-of-type这三者有什么不同

```
<div>
    <p>大儿子</p>
    <div>二儿子</div>
    <p>三儿子</p>
</div>
<p>二叔</p>
<div>三叔<div>
```

* div:nth-child（2） 选中父元素里的第二个子元素div；（即二儿子被选中）
* p:first-child 选中父元素里的第一个p元素；（大儿子被选中，二叔没有被选中，因为它不是父元素里的第一个元素）
* p:first-of-type 选中第一个类型为p的子元素（大儿子、二叔被选中，因为大儿子是父元素div的第一个p元素，二叔是body的一个p元素）
* ：nth-child（n）和：first-child 是强调父元素里的第n个xx子元素，首先是第n个，然后才是xx类型；：first-of-type 主要强调类型，即一个父元素里，无论我们想选中的那个元素前面有多少个同级元素，都不算，只要找到父元素里的第一个xx子元素就行。