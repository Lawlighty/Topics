## line-height三种赋值方式有何区别

line-height 可以有带单位及不带单位的写法
```
div{
	line-height: 24px;
	line-height: 1.5;
	line-height: 1.5em;
	line-height: 150%;
}
```

对于应用在单个元素上，这几种写法的效果都是一样的（除了 px 需要一些计算）。但由于 line-height 是可以被继承的，因此会影响内部子元素的 line-height。简单的可以总结为：

* 带有单位的 line-height 会被计算成 px 后继承。子元素的 line-height = 父元素的 line-height * font-size （如果是 px 了就直接继承）

* 而不带单位的 line-height 被继承的是倍数，子元素的 line-height = 子元素的 font-size * 继承的倍数