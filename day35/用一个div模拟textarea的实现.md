## 用一个div模拟textarea的实现

```
<!DOCTYPE html>
<html>
<head>
    <title>用一个div模拟textarea的实现</title>
</head>
<style>
.edit{
    width: 300px;
    height: 200px;
    padding: 5px;
    border: solid 1px #ccc;
    resize: both;
    overflow:auto;
}
</style>
<body>
    <h3>用一个div模拟textarea的实现</h3>
      <div class="edit" contenteditable="true">
        这里是可以编辑的内容，配合容器的 overflow ，多行截断，自定义滚动条，简直好用的不要不要的。
    </div>
</body>
</html>
```