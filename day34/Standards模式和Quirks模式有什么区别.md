## Standards模式和Quirks模式有什么区别

标准模式宽度就是内容本身，而怪异模式是内容加上padding加上border，但是不加margin

> 可以看到很多网站都使用 * { box-sizing: border-box; } 这个样式，因为浏览器默认是标准模式，也就是 content-box , 而大家其实更习惯使用怪异模式