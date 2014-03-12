---
layout: post
title: jQuery学习笔记之二jQuery的功能
date: 2012-05-17 23:44
author: guoguogis
comments: true
categories: [HTML5]
tags: [jQuery]
---
jQuery的首要目标就是确保在所有主要浏览器下都能流畅地运行代码。很多JavaScript难题（比如等待页面加载完毕后才能执行页面操作）都已经被jQuery轻松的解决了。

jQuery除了核心功能外，还通过插件提供了简单而强大的内置方法，以扩展现有的功能。

jQuery的核心代码有一下几个方面的功能：

一、jQuery包装器

jQuery包装器用来选择一组元素，可以通过$(selector)或者jQuery(selector)两个方法，可能你会觉得$()符号有一点奇怪，不过大部分jQuery用户还是会很快喜欢上这种简洁的语法。大部门jQuery使用相同的选择器，不仅支持常用的CSS选择器，而且支持一些没有被所有浏览器完全实现的选择器，甚至宝库奥CSS3中定义的一些强大的选择器。$()函数返回特殊的JavaScript对象，它包含与选择器相匹配的DOM元素数组，这个数组中的元素师按照在文档中的顺序排列的。比如$('"div")就DOM中的元素列表返回一组div的元素集合。

如下代码，假如想要隐藏所有类名为notLongForThisWorld的&lt;div&gt;元素，就可以使用jQuery代码：

```
$(&quot;div.notLongForThisWorld&quot;).hide();
```

如上代码所示，hide()方法叫包装器方法，他们有一个特点就是当执行完毕后（比如上面的隐藏操作）会返回相同的一组元素，以便为另一个操作做准备。例如，假设除了隐藏这些元素，我们还想为每一个元素增加一个新的类removed。可以这样写：

```
$(&quot;div.notLongForThisWorld&quot;).hide().addClass(&quot;removed&quot;);
```

以上两段代码说明：,即为一组类名为notLongForThisWorld的&lt;div&gt;元素集合实现hide()方法后再为这些元素集合添加新类removed。注意是“为同一组元素”。

除了上面看到的获取类名为XXX的元素之外，还可以使用ID选择器，如下代码所示：

```
$(&quot;#someElement&quot;).html(&quot;I have added some text to an element &quot;);
```

这种选择器只能匹配一个元素。

二、使用函数

尽管$()用来获取元素是最常见用法之一，但却并不是它为一个职责。$()函数的另一职责是作为一些通用使用函数集的命名空间前缀。由于以选择器为参数来调用$()生成的jQuery包装器赋予了页面开发者如此的力量，以至于大部分的页面开发者很少会用到其中的一些使用函数。

如下代码是几个使用函数：

除了上面看到的获取类名为XXX的元素之外，还可以使用ID选择器，如下代码所示：

```
var trimmed = $.trim(someString);
var trimmed = jQuery.trim(someString);
```

三、文档就绪处理程序
传统上，window实例处理程序就是为了实现当页面元素完全渲染完后执行操作方法，它是在整个页面完全加载后才执行的。
```
window.onload = function(){
     //这里执行操作
}
```

上述方式虽然能执行定义的代码，但是会由于网速或者资源较大等问题导致延迟执行onload的代码。由此jQuery提供了一个简单的方式解决这个问题，就是在DOM树加载完成后立即出发执行脚本，正式的语法如下：

```
jQuery(document).ready{function (){
    $(&quot;div.notlongForThisWorld&quot;).hide();
  }

}
```

简写格式如下：

```
jQuery(function (){
    $(&quot;div.notlongForThisWorld&quot;).hide();
})
```

更为优秀的一点是，我们可以在一个HTML文档中多调用此函数，浏览器会按照他们在页面中的顺序依次调用这些函数。

&nbsp;

四、jQuery与其他库共存

当同时引入多个js库时，难免会在语法上存在一些冲突，如Prototype将使用“$”作为关键字，所以为了消除冲突，尅使用如下方法：

```
jQuery.noConflict();
```
