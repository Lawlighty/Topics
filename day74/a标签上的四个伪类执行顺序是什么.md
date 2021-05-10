## a标签上的四个伪类执行顺序是什么

* 执行顺序应该是：

    * link
    * hover
    * active
    * visited
  
* 因为存在样式层叠问题，所以书写顺序需要调整，把类似hover这种瞬时状态覆盖link这种常态

    * link
    * visited
    * hover
    * active