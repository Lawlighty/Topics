```
* {
    -webkit-touch-callout:none;
    -moz-touch-callout:none;
    -ms-touch-callout:none;
    touch-callout:none;
 }
```


```
body {

-webkit-touch-callout:none;/*系统默认菜单被禁用*/

-webkit-user-select:none;/*webkit浏览器*/

-khtml-user-select:none;/*早起浏览器*/

-moz-user-select:none;/*火狐浏览器*/

-ms-user-select:none;/*IE浏览器*/

user-select:none;/*用户是否能够选中文本*/

}
```

### 此段css样式加入后能解决ios下手机浏览器,微信浏览器长按出现选择系统菜单问题,但是对于Android下微信浏览器还会出现不兼容问题,需在禁用页面加入一段js事件处理如下:
```
document.oncontextmenu=function(e){

    e.preventDefault();

};
```
* oncontextmenu 事件在元素中用户右击鼠标时触发并打开上下文菜单。此处用于阻止菜单的出现.