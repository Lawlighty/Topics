## 怎样把一个div居中？怎样把一个浮动元素居中？怎样把绝对定位的div居中?

假定是水平居中

div居中：

margin:0 auto;

浮动元素居中(div居中也可以用)：

margin-left: 50%; transform: translate(-50%);

绝对定位的div居中：

{ top:0; left:0; bottom:0; right:0; margin: auto; }

```
text-alin: center;
margin: 0 auto;
position: relative | absolute; left: 50%;
vertical-align: middle;
transform: translate(-50%);
```
