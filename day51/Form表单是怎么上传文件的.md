##  Form表单是怎么上传文件的

> 文件转化成字节流，然后使用http进行传输，后端接受后在把二进制转化成原先的文件格式

在HTML表单中，可以上传文件的唯一控件就是`<input type="file">`。
当一个表单包含`<input type="file">`时，表单的enctype必须指定为multipart/form-data（表明表单需要上传二进制数据），method必须指定为post，浏览器才能正确编码并以multipart/form-data格式发送表单的数据。multiple="multiple"说明可以同时上传多个文件

> 也可以使用文件编码传输，可以把图片转化成base64格式然后进行传输，到了服务器之后直接解码base64，