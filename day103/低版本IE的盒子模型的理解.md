## 低版本IE的盒子模型的理解

一个CSS盒子由四部分组成，由内到外依次是：content、padding、border、margin。

所谓盒子模型定义的是盒子宽高的计算方法，IE盒子模型的宽高为content、padding、border之和。而W3C盒子的宽高仅为content。从页面布局来说前者实际上更实用一点，这也是后来W3C提供box-sizing属性用于切换盒子模型的原因。