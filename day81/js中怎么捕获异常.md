## js中怎么捕获异常

* 复杂逻辑代码库
* 发起 ajax、fetch 的时候
* 判断是否支持默写浏览器特性

```
        async function requestData() {
          try {
            if (this.loading) return
            this.loading = true

            await api.getData()

            ...
          } catch (err) {
            console.error(err)
          } finally {
            this.loading = false
          }
        }
```