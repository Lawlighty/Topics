## cookies、sessionStorage和localStorage的区别

* cookie：存放于浏览器中的数据；常用于会话管理，用户设置，行为跟踪等。在js中可以通过document.cookie来进行设置，获取或删除等操作；不过cookie有许多明显的缺点：
> * cookie的大小限制在4KB；
> * cookie会伴随http请求一起被发送，会浪费网络带宽
> * cookie的正确操作比较困难


* webStorage：H5新增的API，数据存放于客户端本地内存中；
    * sessionStorage和localStorage操作一致，
    * 而sessionStorage的有效期限为一次session会话（即一个tab页从打开到关闭之间的时间段），
    * localStorage是没有失效时间的（即永久保存，删除需要手动处理）；