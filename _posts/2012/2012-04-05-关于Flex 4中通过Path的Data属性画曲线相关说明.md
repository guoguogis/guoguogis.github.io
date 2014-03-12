---
layout: post
title: 关于Flex4中通过Path的Data属性画曲线相关说明
date: 2012-04-05 09:46
author: guoguogis
comments: true
categories: [flash]
tags: [Path]
---
Flex 4中引入了Spark组件，即所有继承自SkinableComponent的类都可以通过设置皮肤来定制组件的外观。

而在定制这些外观的同时，我们经常会遇到手写皮肤的情况，例如手动画曲线等。

这里就简要介绍一下通过Path的Data属性来画曲线的方法：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/04/曲线.jpg"><img class="alignnone size-medium wp-image-279" title="曲线" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/04/曲线-300x157.jpg" alt="" width="300" height="157" /></a>

如上图所示，当从A点开始向C点画绿色曲线时，控制点为A、D；

当从A点开始向C点画蓝色曲线时，控制点为A、B；

注意的是，通过画曲线的方法也可以画圆，但是推荐用Ellipse。
