---
layout: page
title: Markdown中让代码高亮的写法别
tagline: Supporting tagline
tags: [highlight]
categories: [javascript]
comments: true
---
{% include JB/setup %}


在markdown文件中有两种代码写法：

### pre>code写法

<pre><code class="javascript">
IBaseTag.getILabeltext = function (id) {
    tempid = id + "_span";
    return $("#" + tempid).attr("text");
};
</code></pre>

### 符号包括写法

```javascript
getILabeltext = function (id) {
    tempid = id + "_span";
    return $("#" + tempid).attr("text");
};
```

可以看到第一种只是将代码包裹起来了，并没有高亮；
第二种却将代码的关键字高亮显示了，***在博客中目前不能正常解析***。
