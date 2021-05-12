## 更改placeholder的字体颜色和大小

```
  <style>
    /* Chrome浏览器 */
    input::-webkit-input-placeholder {
      color: red;
    }

    /* 火狐浏览器 */
    input::-moz-placeholder {
      color: red;
    }

    /* IE */
    input:-ms-input-placeholder {
      color: red;
    }
  </style>
<body>
  <input type="text" placeholder="你好">
</body>
```