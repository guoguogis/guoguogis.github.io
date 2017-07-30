---
layout: post
title: 由两点坐标计算角度算法：象限分割法
date: 2012-03-13 05:55
author: guoguogis
comments: true
categories: [flash]
tags: [象限分割]
---
假定有两个点，一个固定，另外一个点在移动，这样在不同时刻计算两点所形成的角度，获取该角度用来控制其他空间或者组件等显示对象的状态：
由于两点坐标所算出来的角度是正切三角函数，其值为(Math.PI/2,Math.PI/2);

{% highlight as3%}
internal function computeAngleByPoints(point1:Point , point2:Point ):Number
{
     var angle:Number = 0;
     var midv:Number = Math.sqrt(Math.pow(point2.y - point1.y, 2) + Math.pow(point2.x - point1.x, 2));
     var sin:Number = (point2.y - point1.y) / midv;
     var cos:Number = (point2.x - point1.x) / midv;
     if ((point2.x - point1.x) != 0){
         angle = Math.atan((point2.y - point1.y) / (point2.x - point1.x));
         //第一象限
         if (sin &gt;= 0 &amp;&amp; cos &gt;= 0){
            // angle = angle ;//90是人为加的
         }else if (sin &gt;= 0 &amp;&amp; cos &lt; 0){
            angle = Math.PI*2 + angle;
         }
         else if (sin &lt; 0 &amp;&amp; cos &lt;= 0){
            angle = Math.PI*2 + angle;
         }
         else if (sin &lt; 0 &amp;&amp; cos &gt;= 0){
             //第四象限
             angle = 2 * Math.PI + angle;
         }
     }else {
         if (point2.y &gt; point1.y){
            angle = Math.PI / 2;
         }else{
            angle = 3 * Math.PI / 2;
         }
     }
     var rotation:Number = (angle * 180 / Math.PI);
     return rotation;
 }

{% endhighlight %}
OK,算法完毕.
