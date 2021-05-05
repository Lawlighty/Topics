## cookie和session的理解

由于 http 是无状态的，服务端没法记录客户端的状态。因此 cookie 和 session 本身就是为了记录客户端的状态。

cookie: 可以通过客户端, 服务端设置, 容量小, 可以通过设置domain来实现同步登录, 除了name, value, 它还有多个选项, domain, path, secure, expires, 客户端和服务端可以通过cookie来通讯, 传递信息

session: 由服务端设置并发起, 是服务端对于用户行为的一种凭证, 通常也是由cookie来维持这种关系, 比如session_id, 或者现在webstorm设置的Webstorm-bb00fc34等! 通过这种维持两者的关系,

区别session与Cookie：
* session存储数据在服务器端，Cookie在客户端。
* session没有数据大小限制，Cookie有。
* session数据安全，Cookie相对于不安全