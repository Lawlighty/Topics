## 什么是微格式(microformat)

> 微格式，利用 HTML 的 class 属性来对网页添加附加信息。

* vCard（电子名片）
* iCalendar（日历数据交换）

应用举例：当你用手机浏览某公司的网站时，手机浏览器识别出了网页中的 hCard 信息。这个 hCard 标记了该公司的多种联络方式，手机浏览器很聪明地提示你“是否保存到通讯录”，于是你可以很经松地保存所需要的信息。

```
<div class="vcard">
    <div class="fn">Joe</div>
    <div class="org">Company A</div>
    <div class="tel">400-800-12345</div>
    <a href="http://companyA.com" class="url">http://companyA.com</a>
</div>
```
> 这里，正式名称 class=”fn”，组织 class=”org”，电话号码 class=”tel” 和 url class=”url” 分别用相应的 class 标示；同时，所有内容都包含在 class="vcard" 里。