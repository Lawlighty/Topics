## 有使用过JWT吗

JSON Web Token（缩写 JWT）是目前最流行的跨域认证解决方案。服务器认证以后，生成一个 JSON 对象，由客户端保存，每次服务端通信只要但是这个json对象就可以。方便服务器拓展。

JWT 由三部分组成Header（头部），Payload（负载），Signature（签名）。Header（头部），Payload（负载）都是json对象。Signature 部分是对前两部分的签名。

首先，需要指定一个密钥（secret）。这个密钥只有服务器才知道，不能泄露给用户。

然后，使用 Header 里面指定的签名算法（默认是 HMAC SHA256），按照下面的公式产生签名。

HMACSHA256(
base64UrlEncode(header) + "." +
base64UrlEncode(payload),
secret)

算出签名以后，把 Header、Payload、Signature 三个部分拼成一个字符串，每个部分之间用"点"（.）分隔，就可以返回给用户。

```
用户在登录时由服务器根据用户的标识【有时候可能也包含客户端信息以及时间戳】生成的token，加解密的秘钥保存在服务端，客户端登录后将得到的token持久化存储，并且应用运行时在请求的headers中携带token，服务端的接口可以根据token判断请求是否可信任。以此简单的逻辑实现交互的安全性：
服务端：有token--->允许访问；无token或token无效---->禁止访问.
客户端：有token且token有效--->直接展示应用界面；无token或token无效---->返回登录页面获取token.
```