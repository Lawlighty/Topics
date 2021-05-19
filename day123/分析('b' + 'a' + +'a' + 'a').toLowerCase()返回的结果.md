## 分析('b' + 'a' + +'a' + 'a').toLowerCase()返回的结果

> 那个多出来的 + 是一元操作符，操作数是后面那个 'a'，它被转成了 number NaN。


```
’b‘ + =>'b'
'b' + 'a' => 'ba'
'ba' + (+'a') => 'ba' + (Number('a')) => 'baNaN'
'baNaN' + 'a' =>'baNaNa'
'baNaNa' .toLowerCase() =>'banana'
```