## 说说visibility属性的collapse属性值有什么作用

设置visibility: collapse后对于普通元素来说跟visibility: hidden效果一样，隐藏元素，且占用空间

但对于一些table元素，比如row、columu、group，效果则跟display: none一样，隐藏元素，但不占空间

但这些效果会随着浏览器底层实现不同而改变：

* 在Chrome下，visibility: collapse都与visibility: hidden没有什么区别，即仍会占用空间
* 在火狐浏览器、Opera里，使用collapse值的效果就如它的字面意思：table的行会消失，它的下面一行会补充它的位置，不占用空间。
* 在IE即使设置了visibility: collapse，还是会显示元素。