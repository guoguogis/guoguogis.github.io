---
layout: post
title: 通过媒体查询设置不同不同设备页面布局
date: 2012-11-29 19:22
author: guoguogis
comments: true
categories: [HTML5]
tags: [media queries]
---
移动设备的快速普及完全颠覆了Web设计领域。用户不再仅在传统桌面系统上查看Web内容，他们越来越多地使用具有各种尺寸的智能电话、平板电脑和 其他设备。Web设计人员的挑战是确保他们的网站不仅在大屏幕上看起来不错，在小型的电话以及介于它们之间的各种设备上看起来也不错。

媒体查询是向不同设备提供不同样式的一种不错方式，它为每种类型的用户提供了最佳的体验。作为CSS3规范的一部分，媒体查询扩展了<code>media</code>属性（控制您的样式应用方式）的角色。例如，多年来人们常常使用一种独立的样式表，通过指定media="print"来打印网页。媒体查询将这一理念提升到了更高层次，允许设计人员基于各种不同的设备属性（比如屏幕宽度、方向等）来确定目标样式。
###Viewport
Apple为了解决移动版Safari的屏幕分辨率大小的问题，专门定义了viewport虚拟窗口，它的主要作用是允许开发者创建一个虚拟的窗口，并自定义其窗口的大小或缩放功能。

目前，除了Safari外，其他的浏览器也支持viewport 虚拟窗 口，唯一不同的是不同浏览器对viewport窗口的默认大小支持不一致：

Android Browser :800像素；

IE：974像素；

Opera：850像素；

&nbsp;

width：控制 viewport 的大小，可以指定的一个值，如 600，或者特殊的值，如 device-width 为设备的宽度（单位为缩放为 100% 时的 CSS 的像素）。
height：和 width 相对应，指定高度。<br>
initial-scale：初始缩放比例，也即是当页面第一次 load 的时候缩放比例。<br>
maximum-scale：允许用户缩放到的最大比例。<br>
minimum-scale：允许用户缩放到的最小比例。<br>
user-scalable：用户是否可以手动缩放，当取值为no时，按理来说不允许客户手动缩放，但是实际测试结果为仍可以手动缩放；

###Media Queries
Media Queries 样式模块在传统网页布局向移动版网页布局转换过程中起着最为重要的作用，通过该标签，不同平台上的浏览器会自动识别

目前为止，Media Queries样式模块在桌面端都得到了大部分现代浏览器的支持。如IE 9、FireFox、Safari、Chrome、Opera。注意IE8及以下版本不支持Media Queries。
