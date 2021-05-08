## TML5如果不写<! DOCTYPE html> ，页面还会正常工作么
> <! DOCTYPE html> 的作用是什么?

会啊! 只是有时候不是按照你想的那种情况来工作, 不过浏览器认为那是正常的
doctype就是声明文档类型, 它的影响范围包括HTML, CSS, DOM, 等
如果不声明文档类型, 浏览器就会按照自己的理解(规则)默认帮你声明一种类型. 具体看浏览器行为

* 页面添加了<! DOCTYPE html>说明该页面采用了W3C标准，如果不加则页面会根据浏览器自身的解析标准来解析，这可能会导致页面在不同的浏览器呈现出不同的效果。


### 什么是DOCTYPE?
> DOCTYPE是document type的简写，它并不是 HTML 标签，也没有结束标签，它是一种标记语言的文档类型声明，即告诉浏览器当前 HTML 是用什么版本编写的。


### DOCTYPE的作用?
> DOCTYPE是document type(文档类型)的简写，在web设计中用来声明文档类型。
在所有 HTML 文档中规定 DOCTYPE 是非常重要的，这样浏览器就能了解预期的文档类型， 告诉浏览器要通过哪一种规范（DTD）解析文档（比如HTML或XHTML规范）。
DOCTYPE会影响代码验证，并决定了浏览器最终如何显示你的Web文档。

### HTML 4.01 和 HTML5 中 DOCTYPE的区别
> HTML 4.01 中的 doctype 需要对 DTD 进行引用，因为 HTML 4.01 基于 SGML。
> 
> HTML 5 不基于 SGML，因此不需要对 DTD 进行引用，但是需要 doctype 来规范浏览器的行为（html 5简化了这种声明，意在告诉浏览器使用统一的标准即可）。
