## 不依赖第三方库，说下如何使用js读取pdf

* 前端不使用第三方库，如何将 PDF 文件显示在网页上。

    * 现代桌面浏览器都自带 PDF viewer 插件的，用 `<iframe src="file.pdf">` 就能显示。（embed应该也可以）
  
* 前端不使用第三方库，如何读取并解析 PDF 格式，利用 HTML 技术渲染 PDF 文件内容？

    * 这个就是 pdf.js 干的事情。思路是使用 FileReader API 读取文件二进制内容，根据 PDF 文件规范解析内容（PDF 是开源格式），根据 PDF 文件描述的文档内容和布局，用 canvas 或者 DOM 展现出来。内嵌的 font 或图片可以提取二进制然后用 blob URL 搞定，难点是如何用 DOM 实现 PDF 格式描述的布局 (不清楚 PDF 是如何描述布局的)。