##  对于前端安全，你了解多少？说说你对XSS和CSRF的理解

* XSS攻击全称跨站脚本攻击,一般有sql注入，js脚本注入。评论类型模块的提交过程中不要相信客户的输入内容，需要进行转义。同理也不要百分百相信服务端发来的展示内容，同样需要转义。
* csrf跨站请求伪造，冒充正确用户登录做一些操作。请求需要鉴权，比如携带token，或者利用seesion，cookie来鉴权。敏感信息提交可以使用验证码