---
layout: post
title: [转]HTML5自定义属性对象Dataset简介
date: 2012-11-30 15:39
author: guoguogis
comments: true
categories: [HTML5]
tags: [dataset]
---
<h3>一、html5 自定义属性介绍</h3>
我之前翻译的“<a href="http://www.zhangxinxu.com/wordpress/?p=1058">你必须知道的28个HTML5特征、窍门和技术</a>”一文中对于HTML5中自定义合法属性<code>data-</code>已经做过些介绍，就是在HTML5中我们可以使用<code>data-</code>前缀设置我们需要的自定义属性，来进行一些数据的存放，例如我们要在一个文字按钮上存放相对应的id：
<div>
<pre>&lt;a href="javascript:" data-id="2312"&gt;测试&lt;/a&gt;</pre>
</div>
这里的<code>data-</code>前缀就被称为<code>data属性</code>，其可以通过脚本进行定义，也可以应用CSS属性选择器进行样式设置。数量不受限制，在控制和渲染数据的时候提供了非常强大的控制。
<h3>二、Dataset基础</h3>
下面是元素应用data属性的一个例子：
<div>
<pre>&lt;div id="day2-meal-expense"
  data-drink="coffee"
  data-food="sushi"
  data-meal="lunch"&gt;¥20.12&lt;/div&gt;</pre>
</div>
要想获取某个属性的值，可以像下面这样使用dataset对象：
<div>
<pre>var expenseday2 = document.getElementById('day2-meal-expense');
var typeOfDrink = expenseday2.dataset.drink;</pre>
</div>
关于这个基本使用，我做了个demo，您可以狠狠地点击这里：<a href="http://www.zhangxinxu.com/study/201106/dataset-basics.html" target="_blank">dataset基本使用实例demo</a>

点击demo页面的按钮做测试，如果浏览器不支持<code>dataset</code>，例如FireFox 4，则弹出的结果就会类似下面：
<img title="不支持dataset的弹出内容 张鑫旭-鑫空间-鑫生活" src="http://image.zhangxinxu.com/image/blog/201106/2011-06-13_224550.png" alt="不支持dataset的弹出内容 张鑫旭-鑫空间-鑫生活" width="307" height="187" />

如果支持，例如Chrome 11浏览器，则弹出的结果就是：
<img title="支持dataset的弹出结果 张鑫旭-鑫空间-鑫生活" src="http://image.zhangxinxu.com/image/blog/201106/2011-06-13_224724.png" alt="支持dataset的弹出结果 张鑫旭-鑫空间-鑫生活" width="400" height="168" />

需要注意的是带连字符连接的名称在使用的时候需要命名驼峰化，即大小写组合书写，这与应用元素的style对象类似，<code>dom.style.borderColor</code>。例如，假设上面的例子中现在有如下data属性，<code>data-meal-time</code>，则我们要获取相应的值可以使用：
<div>
<pre>expenseday2.dataset.mealTime</pre>
</div>
<code>data</code>属性基本上所有的浏览器都是支持的，但是<code>dataset</code>对象就属于新贵，目前仅在Opera 11.1+， Chrome 9+下可以通过JavaScript，使用<code>dataset</code>访问你自定义的<code>data</code>属性。至于其他浏览器，FireFox 6+（未出）以及Safari 6+（未出）会支持<code>dataset</code>对象，至于IE浏览器，目前看来还是遥遥无期的趋势。具体的些兼容性数据，您可以<a href="http://caniuse.com/#feat=dataset">点击这里</a>访问。
<h3>三、我们为何需要dataset</h3>
如果使用传统的方法获取属性值应该会类似下面：
<div>
<pre>var typeOfDrink = document.getElementById('day2-meal-expense').getAttribute('data-drink');</pre>
</div>
现在，假设我们要获得多个自定义的属性值，得，折腾的事情就来了，我们可能要采用类似下面的N行代码实现了：
<div>
<pre>var attrs = expenseday2.attributes,
expense = {}, i, j;
for (i = 0, j = attrs.length; i &lt; j; i++) {
  if(attrs[i].name.substring(0, 5) == 'data-') {
    expense[attrs[i].name.substring(5)] = attrs[i].value;
  }
}</pre>
</div>
而使用<code>dataset</code>属性，我们根本不需要任何循环去获取你想要的那个值，直接秒杀：
<div>
<pre>expense = document.getElementById('day2-meal-expense').dataset;</pre>
</div>
<code>dataset</code>并不是典型意义上的JavaScript对象，而是个<code><a href="http://www.w3.org/TR/html5/common-dom-interfaces.html#domstringmap-0">DOMStringMap对象</a></code>，<code>DOMStringMap</code>是HTML5一种新的含有多个名-值对的交互变量。
<h3>四、dataset的操作</h3>
您可以像下面这样操作名-值对：
<div>
<pre>chartInput = [];
for (var item in expense) {
  chartInput.push(expense[item]);
}</pre>
</div>
上面这几行代码作用是让所有的自定义的属性值塞到一个数组中。

如果你想删掉一个<code>data属性</code>，可以这么做：
<div>
<pre>delete expenseday2.dataset.meal;</pre>
</div>
如果你想给元素添加一个属性，可以这么做：
<div>
<pre>expenseday2.dataset.dessert = 'icecream';</pre>
</div>
<h3>五、跟getAttribute相比的速度</h3>
使用<code>dataset</code>操作<code>data </code>要比使用<code>getAttribute</code>稍微慢些，这里有个页面专门对这两个方法速度做了测试，<a href="http://jsperf.com/dataset-vs-attributes-loop/3">dataset vs attributes loop</a>，请使用Chrome浏览器以及Opera 11.1+的浏览器，点击"run test"按钮后，会得到一些数据，如下截图：
<img title="dataset和getAttribute速度测试数据 张鑫旭-鑫空间-鑫生活" src="http://image.zhangxinxu.com/image/blog/201106/2011-06-14_101529.png" alt="dataset和getAttribute速度测试数据 张鑫旭-鑫空间-鑫生活" width="267" height="237" />

但是，如果我们只是处理少量的data数据，这种速度上差异造成的影响是基本上没有的。反而，我们应该看到，使用<code>dataset</code>操作自适应属性要比其他类似<code>getAttribute</code>的形式要少很多让人头疼的麻烦，并且更具有可读性。因此，权衡来看，操作自定义属性，<code>dataset</code>操作是上选。
<h3>六、什么地方使用dataset</h3>
每次你使用自定义data属性的时候，使用<code>dataset</code>去获取名-值对就是个不错的选择。考虑到现在很多浏览器还是把<code>dataset</code>当作不认识的外星生物看待，所以，在实际使用的时候，有必要进行下特征检测，看看是否支持<code>dataset</code>，类似下面的使用：
<div>
<pre>if(expenseday2.dataset) {
  expenseday2.dataset.dessert = 'icecream';
} else {
  expenseday2.setAttribute('data-dessert', 'icecream');
}</pre>
</div>
<strong>注意：</strong>如果你的应用程序会频繁更新<code>data属性</code>值的话，建议使用JavaScript对象进行数据管理，而不是每次都经由<code>data属性</code>进行更新。
<h3>七、CSS中的data属性</h3>
我们可以基于data属性值对相应的元素设置CSS样式，例如下面这个例子：

HTML代码如下：
<div>
<pre>&lt;div data-name="张含韵"&gt;&lt;/div&gt;
&lt;div data-name="undefined"&gt;&lt;/div&gt;</pre>
</div>
CSS代码如下：
<div>
<pre>.mm{width:256px; height:200px;}
.mm[data-name='张含韵']{background:url(http://image.zhangxinxu.com/image/study/s/s256/mm1.jpg) no-repeat;}
.mm[data-name='undefined']{background:url(http://image.zhangxinxu.com/image/study/s/s256/mm3.jpg) no-repeat;}</pre>
</div>
结果就会出现一个小美女和一个大美女的图片，例如下面在IE7文档模式下的截图：
<img title="HTML5自定义属性data与CSS3样式控制" src="http://image.zhangxinxu.com/image/blog/201106/2011-06-14_113452.jpg" alt="HTML5自定义属性data与CSS3样式控制" width="564" height="349" />

您可以狠狠地点击这里：<a href="http://www.zhangxinxu.com/study/201106/css3-data-style.html" target="_blank">HTML5自定义属性与CSS3样式demo</a>
<h3>八、简单的综合实例</h3>
为了展示dataset的应用，这里提供一个demo页面，如果利用dataset制作数据图效果，您可以狠狠地点击这里：<a href="http://www.zhangxinxu.com/study/201106/dataset-chart-example.html" target="_blank">HTML5 dataset下的数据图demo</a>

滑动HTML5 range控件，可以看到下面的数据以及图形大小跟着改变了，如下截图（截自Opera 11.1）：
<img title="dataset与数据图截图 张鑫旭-鑫空间-鑫生活" src="http://image.zhangxinxu.com/image/blog/201106/2011-06-14_145505.png" alt="HTML5 dataset与数据图截图 张鑫旭-鑫空间-鑫生活" width="572" height="352" />
<h3>九、结语</h3>
使用<code>dataset</code>获取元素的自定义属性是个很不错的方法，随着以后越来越多的浏览器支持，例如<a href="https://bugzilla.mozilla.org/show_bug.cgi?id=560112">FireFox浏览器</a>，这个对象属性在实际项目中正式使用是很有可能的。虽然说使用<code>dataset</code>不能提高代码的性能，但是对于简洁代码，提高代码的可读性和可维护性是很有帮助的。

如果您对<code>dataset</code>有兴趣，做了些demo什么的，可以去这里<a href="https://github.com/operasoftware/devrel-misc/commits/gh-pages/demos/dataset/index.html">Opera Github repository</a>玩转你的些小成果。

参考文章：<a href="http://dev.opera.com/articles/view/an-introduction-to-datasets/">An Introduction to Datasets</a>
demo支持：<a href="http://operasoftware.github.com/devrel-misc/demos/dataset/">Cost of Electricity €/kWh over the decade</a>

&nbsp;

原文地址：<a href="http://www.zhangxinxu.com/wordpress/?p=1693">http://www.zhangxinxu.com/wordpress/?p=1693</a>
