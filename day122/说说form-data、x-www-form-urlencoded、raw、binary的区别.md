## 说说form-data、x-www-form-urlencoded、raw、binary的区别

### 同
发送请求的方式

### 异
1. multipart/form-data 其请求内容格式为Content-Type: multipart/form-data,用来指定请求内容的数据编码格式，一般用来文件上传。
2. application/x-www-form-urlencoded 是post的默认格式，使用js中URLencode转码方法。
3. raw 可上传任意格式的文本，可以上传text、json、xml、html等各种文本类型。
4. binary 等同于Content-Type:application/octet-stream，只可上传二进制数据。