## input的onblur和onchange事件区别是什么

* oninput：表单内容变化即触发
* onchange：表单内容变化且失去焦点即触发
* onfocus：表单获得焦点触发，readonly适用
* onblur：失去焦点即触发，readonly适用
  
> onchange 在 input 发生变化然后在失去焦点的时候触发。且先于 onblur 触发。onchange 只有在 input 的值必须与前一次输入不同才会触发。


```
<body>
    <div class="container">
        <input type="text" oninput="handleOninput()" onchange="handleOnchange()"  onfocus="handleOnfocus()" onblur="handleOnblur()" />
    </div>
    <script>
        function handleOninput() {
            console.log('oninput：' + +new Date())
        }
        function handleOnchange() {
            console.log('onchange：' + +new Date())
        }
       function handleOnfocus() {
           console.log('onfocus：' + +new Date())
        }
        function handleOnblur() {
            console.log('onblur：' + +new Date())
        }
    </script>
</body>
```