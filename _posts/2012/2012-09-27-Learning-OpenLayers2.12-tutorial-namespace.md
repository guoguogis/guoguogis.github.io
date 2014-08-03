---
layout: post
title: OpenLayers2.12学习教程之命名空间
date: 2012-09-27 15:29
author: guoguogis
comments: true
categories: [HTML5]
tags: [namespace]
---
html5是大势所趋，不管是互联网还是移动互联网，最终web应用将取代本地应用。一直想好好的研究一下openlayers开源代码，各种原因吧都给搁浅了。作为GIS科班出生的我来说，研究一下开源互联网地图的项目更是理所应当。所以，我将从GIS的角度来由浅入深，系统的学习一下Openlayers，并在博客更新，一来也是将自己的研究成果分享给大家，二来对自己来说也是一个约定。由于第一次比较系统的分享学习经验，所以经验不足，希望大家尽情拍砖。我也将虚心受教！

###为什么要用命名空间

跟java中的包或者C#中的命名空间的作用类似，使用命名空间的作用就是防止同名类或者同名函数的冲突。<strong>avaScript 的命名空间</strong>并不是真正的命名空间, 只是在脚本内部创建一个封闭的小空间, 必须通过特定的空间名称才能对空间内部的代码进行访问。

###怎样使用命名javascript的命名空间

1、声明一个匿名函数；

2、在匿名函数内部声明和实现内部方法，然后将内部函数注册到window对象上；

如openlayers中定义命名空间的方法如下：

```
/**
 * Namespace: OpenLayers
 * The OpenLayers object provides a namespace for all things OpenLayers
 */
 window.OpenLayers = {
 /**
 * Method: _getScriptLocation
 * Return the path to this script. This is also implemented in
 * OpenLayers/SingleFile.js
 *
 * Returns:
 * {String} Path to this script
 */
 _getScriptLocation: (function() {
     var r = new RegExp(&quot;(^|(.*?\\/))(&quot; + scriptName + &quot;)(\\?|$)&quot;),
         s = document.getElementsByTagName('script'),
         src, m, l = &quot;&quot;;
     for(var i=0, len=s.length; i&lt;len; i++) {
         src = s[i].getAttribute('src');
         if(src) {
           m = src.match(r);
           if(m) {
              l = m[1];
              break;
           }
         }
     }
     return (function() { return l; });
 })(),

 /**
 * APIProperty: ImgPath
 * {String} Set this to the path where control images are stored, a path
 * given here must end with a slash. If set to '' (which is the default)
 * OpenLayers will use its script location + &quot;img/&quot;.
 *
 * You will need to set this property when you have a singlefile build of
 * OpenLayers that either is not named &quot;OpenLayers.js&quot; or if you move
 * the file in a way such that the image directory cannot be derived from
 * the script location.
 *
 * If your custom OpenLayers build is named &quot;my-custom-ol.js&quot; and the images
 * of OpenLayers are in a folder &quot;/resources/external/images/ol&quot; a correct
 * way of including OpenLayers in your HTML would be:
 *
 * (code)
 * &lt;script src=&quot;/path/to/my-custom-ol.js&quot; type=&quot;text/javascript&quot;&gt;&lt;/script&gt;
 * &lt;script type=&quot;text/javascript&quot;&gt;
 * // tell OpenLayers where the control images are
 * // remember the trailing slash
 * OpenLayers.ImgPath = &quot;/resources/external/images/ol/&quot;;
 * &lt;/script&gt;
 * (end code)
 *
 * Please remember that when your OpenLayers script is not named
 * &quot;OpenLayers.js&quot; you will have to make sure that the default theme is
 * loaded into the page by including an appropriate &lt;link&gt;-tag,
 * e.g.:
 *
 * (code)
 * &lt;link rel=&quot;stylesheet&quot; href=&quot;/path/to/default/style.css&quot; type=&quot;text/css&quot;&gt;
 * (end code)
 */
     ImgPath : ''
 };

```
