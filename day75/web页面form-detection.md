## Meta标签中的format-detection属性及含义
format-detection —— 格式检测，用来检测html里的一些格式，主要有以下几个设置：
- meta name=”format-detection” content=”telephone=no”
- meta name=”format-detection” content=”email=no”
- meta name=”format-detection” content=”adress=no”

或者直接写成：

`meta name=”format-detection” content=”telephone=no,email=no,adress=no”`

telephone

主要作用是是否设置自动将你的数字转化为拨号连接
telephone=no 禁止把数字转化为拨号链接
telephone=yes 开启把数字转化为拨号链接，默认开启

email

告诉设备不识别邮箱，点击之后不自动发送
email=no 禁止作为邮箱地址
email=yes 开启把文字默认为邮箱地址，默认情况开启

adress

adress=no 禁止跳转至地图
adress=yes 开启点击地址直接跳转至地图的功能, 默认开启

### demo:

> 有些浏览器把数字自动识别为手机号码了
> 
> `<meta name="format-detection" content="telephone=no">`
> 
![期望效果](https://img-blog.csdn.net/20160303190514054?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)
![实际效果](https://img-blog.csdn.net/20160303182835464?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQv/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/Center)
