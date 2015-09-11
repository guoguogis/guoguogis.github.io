---
layout: post
title: CSS使用过程中的一些技巧
tagline: Supporting tagline
tags: [css]
categories: [css]
comments: true
---
{% include JB/setup %}
----------

+ 为了将不必要的标记减到最少，应该只在没有现有元素能够实现区域分割的情况下使用div元素。
+ div可以用来对块级元素进行分组，而span可以用来对行内元素进行分组或标识。
+ 块级元素：div table body h1...h6 hr p ul ol li
+ 行内元素：a span img br i input select textarea
+ XHTML 1.0 与 HTML 4.0.1的区别是前者遵循XML规范，要求标签必须闭合。
+ 为什么XHTML 1.1不受欢迎？
    因为XHTML1.1规范中将页面以XML格式发送给浏览器，而XHTML1.0将页面作为HTML发送给页面，前者如果页面有一点错误那么浏览器就无法解析。
    
+ 由于XHTML 2规范进展缓慢，所以一批开发人员角色开发自己的规范，HTML5由此而生。
+ DTD分为strict/transitional两种模式，前者为严格模式，后者为过渡模式，后者目的是兼容以前开发的页面，如兼容font标签等。
+ DOCTYPE的设置可以对页面有效性进行验证，除此之外，还可以用来设置浏览器模式（标准模式、混杂模式）。
+ 如果遇到了没有生效的CSS规则，很可能是优先级出了冲突，需要在选择器中添加其父元素ID。
+ 通过import导入样式表比链接样式表要慢。
+ CSS中几个最重要的概念：浮动、定位、盒模型。

##### 盒模型

+ outline与boder不同，它（轮廓）回执在元素框智商，所以不影响元素的大小与定位。
+ background样式响应在内边距与内容区域上， 
+ width、height指内容区域的宽高，内外边距不会影响该值。但是设置margin/padding的值会影响父容器的尺寸大小，早期的IE的盒模型是指content+padding+margin的大小为width/height大小。
+ CSS3中可以通过box-sizing属性来设置是使用哪种盒模型。
+ 外边距叠加：当一个元素出现在另外一个元素上面时，第一个元素的底外边距与第二个元素的顶外边距会发生叠加；当一个元素包含在另一个元素中且没有内边距或边框将外边距分开，那么也会出现外边距叠加的问题。注意：只有普通文档流的垂直外边距会发生外边距叠加，行内框、浮动狂或绝对定位框剪的外边距不会发生叠加。外边距叠加不是BUG，而是有意为之，在多个段落间非常有用。

##### 定位机制

+ CSS中有3中基本的定位机制：普通流、浮动、绝对定位。
+ 块级元素独占一行，默认宽度继承父级容器宽度，所占总高度尺寸由自身内容高度、内边距，外边距之和决定。
+ 行内元素可以使用水平内边距、边框、外边距调整水平间距，但不印象行内框高度。同样，通过设置widht/height也不会对其宽度、高度产生影响。修改行内框的尺寸的唯一方式是修改行高(line-height)或者水平边框、内边距或外边距。
+ 将行内元素设置为inline-block之后，也可以设置宽高，同时可以在一行显示。
+ 相对定位之后，无论是是否移动元素，元素仍然占据原来的空间，所以相对定位的元素在移动后会覆盖在其他元素之上。相对定位的好处是不会对原来的文档流布局造成影响，即不会发生错位。所以，有人认为相对定位是普通流定位模型，但实际上，相对定位已经脱离了文档流。
+ + 绝对定位会脱离文档流，也是创建BFC布局的场景之一，绝对定位的元素不占据原来文档流的位置，其原来的位置会被其兄弟元素占据。绝对定位元素的位置由top/left等决定，其定位基准点由已定位(非static定位)元素决定。若没有已定位元素则基于body定位。
+ 注意： 相对定位是“相对于”元素所在文档流的初始位置，而绝对定位是“相对于”距离它最近的已定位祖先元素。
+ 因为绝对定位的框与文档流无关，所以他们可以覆盖页面上的其他元素。可以通过z-index来控制这些框的叠放次序。z-index越高，框在栈中的位置就越高。
+ 固定定位(fixed)，与其他定位不同， 其只相对于浏览器的viewport进行定位。
+ 浮动定位：浮动定位的元素可以左右移动，直到他的外边缘碰到包含框或另外一个浮动框的边缘。浮动定位的元素也脱离了文档流。其原来的位置会被浮动之前的其后跟随的兄弟元素填充。如果包含块太窄，无法容纳水平排列的多个浮动元素，那么容纳不下的浮动块乡下移动，直到有足够的控件，实际表现为换行了。当浮动块高度不一致，且包含块无法容纳所有浮动块时，会出现换行后不能左对齐或右对齐的现象。
+ 虽然前面说到不浮动的元素会占据已浮动元素的位置，但是当不浮动元素是个文本框时，其文本内容会受到浮动元素的影响，表现为“文字环绕效果”。注意：浮动定位设计的目的是达到文字环绕效果，而不是浏览器BUG。
+ 浮动元素会使包含框高度塌陷。要想使包含框恢复高度，则在浮动框之后添加一个空框用来清除浮动即可。除此之外，还可以将包含框设置为浮动。虽然为包含框设置浮动可以使包含框恢复高度，但是会影响包含框的兄弟节点的布局，所以该方法在仔细评估后使用。其他清除浮动的方法网上还有比较多的技巧，不过单纯用CSS来实现的话推荐用overflow。

##### 背景图像效果-圆角

+ 当backgournd-position设置为百分比后，如20%，其实际意义是将图像本身距离左上角20%的点定位到父元素上距离左上角20%的位置。
+ 早期的圆角框实现：通过上下两部分图片组成，
上图片左上、右上角通过图片实现圆角，样式如下：

{% highlight css%}
   .box h2 {
        background: url(img/top.gif) no-repeat left top;
    }
{% endhighlight %}


下图片的左下、右下通过图片实现圆角，样式如下：
    
    
{% highlight css%}
   .box {
        width: 418px;
        background: #effce7 url(img/bottom.gif) no-repeat left bottom;
    }
{% endhighlight %}

上面这种方式创建的框可以随着文本的内容的增加其高度垂直增高。


+ 早期的垂直渐变框：

{% highlight css%}
/*包含框*/
.box {
    width: 424px;
    background: url(img/tile2.gif) repeat-y;
}


/*顶部区域*/
.box h2 {
    background: url(img/top2.gif) no-repeat left top;
    padding-top: 20px;
}


/*底部区域*/
.box .last {
    background: url(img/bottom2.gif) no-repeat left bottom;
    padding-bottom: 20px;
}

{% endhighlight %}

+ 滑动门：
    滑动门可以实现灵活的背景框，主要用来实现横向扩展的框。
    核心思想是：左侧图片压盖右侧图片，顶部图片压盖底部图片。当有4张图片时，从左下 到 右上依次被压盖。
    
+ 由于CSS3之前一个容器只能添加一张背景图片，所以要实现灵活框需要滑动门技术。在支持CSS3的浏览器中可以为一个框添加多张图片，代码如下：

{% highlight css%}
   .box {
        background-image: url(img/mtop-left.gif), url(img/mtop-right.gif), url(img/mbottom-left.gif), url(img/mbottom-right.gif);
        background-repeat: no-repeat, no-repeat, no-repeat, no-repeat;
        background-position: top left, top right, bottom left, bottom right;
    }
{% endhighlight %}


+ 加入浏览器支持CSS3中的border-radius，那么圆角框的实现将更加简单。
+ 另外一种实现圆角框的方式是通过border-image,这种方法又称为“九宫格”缩放法。
{% highlight css%}
.box {
    -webkit-border-image: url(img/corners.gif) 25% 25% 25% 25% / 25px round round;
}
{% endhighlight %}

通过这种方式可以通过一张大图来实现圆角。

##### 背景图像效果-阴影

+ 早期的阴影可以通过边框颜色、内外边距的设置来实现、

{% highlight css%}
.img-wrapper img {
    background: #fff;
    padding: 4px;
    border: 1px solid #a9a9a9;
    position: relative;
    left: -5px;
    top: -5px;
}
{% endhighlight %}

+ 浏览器支持CSS3的box-shadow之后可以实现各种阴影。

##### 背景图像效果-透明度

+ 通过 opacity:0.8 这样方式来实现。
+ 另外一种方式通过RGBa来实现。

{% highlight css%}
.box {
    background-color: rgba(0,0,0,0.6);
}
{% endhighlight %}

+ PNG图片的a通道来实现透明。


##### 对链接应用样式

+ 由于不同的伪类选择器具有相同的特殊性时，后定义的规则有限。所以在定义伪类选择器时按照以下规则定义：

{% highlight css%}
a:link, a.visited, a:hover, a:focus, a:active
{% endhighlight %}

+ target选择器，用来突出显示当前活动的锚

{% highlight css%}
.comment:target {
	background-color: yellow;
}
{% endhighlight %}

当通过/xx.html#comment跳转到当前活动块时，该块背景颜色显示黄色。

+ a标签是行内元素，要想实现按钮样式，需要将它设置为块元素。


##### 列表

+ 由于列表有左缩进，为了重新定义属于自己的列表样式，需要对左缩进进行清除。

{% highlight css%}
ul {
	 margin: 0;
     padding: 0;
     list-style-type: none;
}
{% endhighlight %}

+ 为了创建水平列表，可以为li设置左浮动。


##### 表格

+ 表格特有的元素： 
    + summary： 描述表格的内容
    + caption： 表格的标题
    + thead/tfoot: 表头表尾，每个表格只能出现一次表头和表尾
    + tbody: 表格内容，一个表格可以出现多个tbody
    

+ border-collapse: seperate/collapse   单独/叠加 模型。前者每个单元格单独占有边框，后者共享边框，后者更有用。


##### 表单

+ form-->fieldset/legend

##### 布局

+ CSS布局技术的根本都是3个基本概念：定位、浮动、外边距操纵。
+ 通过外边距，让设计居中：

{% highlight css%}
.wrapper {
  width: 920px; 
  margin: 0 auto;
}
body{
    text-align: center
}
{% endhighlight %}

text-align属于一种hack。

+ 两列浮动布局后，为了保持包含块的高度，可以为包含块设置over-flow:hidden。浮动元素间可以设置内、外边距来形成间隔。两列浮动布局可以一列向左，一列向右。
+ 三列浮动布局可以嵌套两层两列浮动布局来实现。
+ 固定宽度布局，虽然比较好实现，在早期的网页设计中比较流行，但是有诸多问题：一方面不能很好的适应现在比较大的屏幕分辨率，另一方面这种布局适用于浏览器默认字体大小的窗口，若调整字体大小后体验较差。为了解决这种问题，目前多已流式布局或弹性布局来替换固定宽度布局。
+ 流式布局中，尺寸是用百分数而不是像素来设置的，这样流式布局能够相对于浏览器窗口进行伸缩，随着浏览器变宽其列宽也会变宽，最好的流式布局不会引起用户的注意。但是流式布局也不是没有问题，当在窗口较小的时候，其列宽也会非常窄，影响阅读，所以有必要设置以像素或em为单位的min-width。
+ 流式两列浮动布局与固定宽度浮动两列布局的写法区别是宽度、内外边距都可以设置为百分数来设置。
+ 虽然流式布局可以充分利用可用空间，但是在大分辨率显示器上，行仍然会过长，让用户不舒服，相反在窄窗口中或者在增加文本字号时，行会变得非常段，内容很零碎，对于这个问题，弹性布局可能是一种解决方法。
+ 弹性布局相对于字号（而不是浏览器宽度）来设置元素的宽度，以em为单位设置宽度，可以确保在字号增加对整个布局随之扩大，这可以将行长保持在可阅读的范围，对于实力弱或者有认知障碍的人尤其有用。
