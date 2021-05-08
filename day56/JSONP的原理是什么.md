## JSONP的原理是什么？解决什么问题？
> JSONP(JSON with Padding)是JSON的一种“使用模式”，可用于解决主流浏览器的 跨域 数据访问的问题。


>  script 引用的js文件没有跨域限制


```
 <button class="getRequest">发起跨域请求</button>
    <textarea name="" id="" cols="30" rows="10" disabled></textarea>
 
    <script>
        function showdata(result) {
            console.log(result);
        }
        $('.getRequest').on('click', function(){
        //1) // $('head').append("<script src='http://localhost/jsonp/service.php?jsonp=showdata'><\/script>");
        
        //2)
            $.ajax({
                url : 'http://localhost/jsonp/service.php',
                type: 'GET',
                dataType: 'jsonp',
                jsonp: 'jsonp', // 自定义，保证后端能通过这个key值获取函数名
                jsonpCallback: "showdata",//自定义的jsonp回调函数名称
                success: function (json) {
                    alert('success');
                },
                error: function () {
                    alert('fail');
                }
            })
        })

```

缺点：

不支持post