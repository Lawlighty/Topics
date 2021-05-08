## 如何消除transition闪屏
> transition闪屏发生的情况，搜了一下是在IOS的Safari浏览器下，使用transition来进行动画变换时候就会出现


```
.css { 
    -webkit-transform-style: preserve-3d; 
    -webkit-backface-visibility: hidden; 
    -webkit-perspective: 1000; 
} 
```