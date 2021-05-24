## css计数器（序列数字字符自动递增）吗

```
body {
  counter-reset: section;
}

h2::before {
  counter-increment: section;
  content: "Section " counter(section) ": ";
}
</style>
</head>
<body>

<h1>使用 CSS 计数器:</h1>
<h2>HTML 教程</h2>
<h2>CSS 教程</h2>
<h2>JavaScript 教程</h2>

<p><b>注意:</b> IE8 需要指定 !DOCTYPE 才可以支持该属性。</p>
```

```
使用 CSS 计数器:
Section 1: HTML 教程
Section 2: CSS 教程
Section 3: JavaScript 教程
注意: IE8 需要指定 !DOCTYPE 才可以支持该属性。
```