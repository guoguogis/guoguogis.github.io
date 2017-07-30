---
layout: post
title: Cookie 用法解析之---Cookie与Flash无关？
date: 2012-09-26 18:22
author: guoguogis
comments: true
categories: [flash]
tags: [cookie]
---
在设置Cookie之前，首先要搞懂一个问题就是什么是Cookie，Cookie到底有什么用？

我这里通过PHP来设置页面Cookie，所以概念同样来自<a href="http://www.w3school.com.cn/php/php_cookies.asp">PHP帮助文档</a>；

概念：<span style="color: #ff0000;">cookie 常用于识别用户。cookie 是服务器留在用户计算机中的小文件。每当相同的计算机通过浏览器请求页面时，它同时会发送 cookie。通过 PHP，您能够创建并取回 cookie 的值。</span>

由上面概念知道，cookie就是客户端第一次在访问某个域名下的页面时获取到并保存在浏览器中，而在浏览器未关闭的情况下客户端再次访问该域名下页面或者资源时，则自动将第一次访问页面获取到的cookie作为头文件参数发送给服务器；

所以当有需求要求在访问某个域名下的资源时头文件中带cookie参数，只需要在客户端第一次访问该域名下资源时获取到响应的cookei即可。 PHP中设置Cookie的一段代码如下：

{% highlight php%}
header("Content-Type:application/x-javascript; charset=utf-8");
//设置COOKIE
header("P3P: CP='CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR'");
setcookie('api_key', @$_GET['key'], time()+3600, '/', '.mapabc.com');
{% endhighlight %}

然而在客户端设置cookie参数，是否也可以访问指定的域名下的资源时带上cookie参数呢？
<span style="color: #ff0000;">这里注意的是客户端设置的cookie，在访问对应域名下的资源时，如果载体部分是页面本身，则可以将客户端cookie发送到服务端；如果载体不是页面本身， 如SWF文件，则不能将页面设置的cookie发送到服务端。</span>
<span style="color: #ff0000;"><span style="color: #000000;">这个问题我是亲自验证过的，地址为</span>：<a href="http://bbs.9ria.com/thread-146752-1-1.html">http://bbs.9ria.com/thread-146752-1-1.html</a>，<a href="http://bbs.9ria.com/thread-146902-1-1.html">http://bbs.9ria.com/thread-146902-1-1.html</a></span>
原因是flash的安全策略导致的。因为在Flash中不允许设置Get请求的头文件。
