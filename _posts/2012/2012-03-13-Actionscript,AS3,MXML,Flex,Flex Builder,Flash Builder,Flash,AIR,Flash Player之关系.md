---
layout: post
title: Actionscript/AS3/MXML/Flex/Flex Builder/Flash Builder/Flash/AIR/Flash Player之关系
date: 2012-03-13 07:22
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
<h3><a href="http://zengrong.net/post/1295.htm">原文：http://zengrong.net/post/1295.htm</a></h3>
<h3>ActionScript</h3>
ActionScript通常简称为AS，它是Flash平台的语言。AS编写的程序，最终可以编译成SWF、SWC。SWF就是我们常说的Flash动画。但是现在SWF已经不仅仅是动画，而是<a title="什么是RIA" href="http://zh.wikipedia.org/zh/%E4%B8%B0%E5%AF%8C%E4%BA%92%E8%81%94%E7%BD%91%E5%BA%94%E7%94%A8%E7%A8%8B%E5%BA%8F" target="_blank">RIA</a>的载体。

ActionScript有3个版本，分别是1.0版（AS1），2.0版（AS2）和3.0版（AS3）。只有Flash Player 9及以上播放器才支持AS3编译的SWF。这三个版本的差别非常大，现在最流行的版本是AS3。
<h3>Flex与MXML</h3>
因为在开发RIA的时候，需要很多常用的功能，例如控件（Button,ComboBox,List……）、布局（VGroup、VBox……）等等…… Adobe就开发了一套官方的框架集来实现这些功能，这套框架集就叫做Flex。

为了方便程序员快速编写RIA程序界面，Adobe又实现了一种基于XML语法的语言<strong>MXML</strong>，这套语言很像HTML，可以与AS混用，MXML最终也是编译成SWF或SWC。 Flex框架就是使用AS3与MXML两种语言写成的。但说白了，MXML 外加实现了MXML语法，如果你有兴趣，也可以自己实现这些。 Flash和Flex，都是用AS编写，使用swf体现。
<h3>Flash</h3>
现在Adobe已经将Flash其定义为一个平台（Flash Plantform），包括了Flash IDE、Flash Builder、AIR、Flash Player以及更多。但我们一般讲Flash，有两个意思，一个是指Flash动画（也就是网页上扩展名为swf的动画），另一个就是Flash IDE。

Flash（IDE）从4.0开始进入中国，前期一直在网页动画方面告诉发展，多被用来做网页小广告（让你CPU100%的罪魁祸首之一）和MV（showgood三国系列、小小系列、大学自习室……曾经风靡一时啊）。那时的“闪客”，主要是做动画，即使涉及到编程，也大多是用当时的AS1.0（后来Flash MX 2004升级为AS2.0）写一点stop、gotoAndPlay之类的东东了。Flash（IDE）发展到8.0版本以后，才开始大量用于编程，当时比较流行的就是“Flash留言本”等等。相关历史我做了一张图来表示，括号里的数字是年份。

<a href="http://zengrong.net/wp-content/uploads/2011/04/flash_history.png"><img title="FlashIDE发展史" src="http://zengrong.net/wp-content/uploads/2011/04/flash_history.png" alt="FlashIDE发展史" width="685" height="514" /></a>
<h3>Flash Builder/Flex Builder</h3>
AS发展到3.0之后，由于其语法和JAVA比较像，再加上增强的性能与强类型，可以完全脱离FLA文件，使用纯文本编码，受到了许多其他程序员（尤其是JAVA程序员）的青睐。由此得以高速发展，用AS开发程序的人也越来越多。AS在视频网站、游戏行业发展迅速。但是，Flash IDE虽然是一个很好的动画制作工具，却不是一个好的开发工具。于是，Adobe又发布了Flex Builder，一个基于Eclipse的IDE，并发布了Flex SDK，后来又开源了。

有了免费的编译器，Flex得以快速发展。用Flex Builder也可以开发纯AS项目（即所有的文件都是as文件，不包含MXML，也不包含FLA）。一个真正的程序猿，应该更愿意使用这种方式吧？Flex Builder从4.0开始，被Adobe改名为Flash Builder。

Flash Builder和Flash IDE不应该放在一起比较，它们不是一类软件。如果一定要比较一下的话，那么就是Flash IDE比较偏重于设计一点，用它做动画比较方便，当然也可以用它编写AS3程序。用Flash IDE编写的程序，会有一个FLA源文件，可能还包含多个as文件。Flash Builder偏重于程序，用它可以开发MXML（也就是Flex）项目。也可以用它编写纯AS项目。用Flash Builder编写的项目，都是纯文本文件（.as或者.mxml）。 对于程序流，当然偏爱Flash Builder，而设计流比较偏爱Flash IDE。

当然，IDE并非只有Adobe官方的东西，<a href="http://www.flashdevelop.org/">Flash Develop</a>就是个免费的IDE。如果你愿意，用记事本做编辑器也没什么不好（比如说zrong就正在尝试<a href="http://www.vim.org/">VIM</a>），因为SDK和编译器都是免费的。
<h3>Flash Player</h3>
swf动画需要在网页上显示出来，就需要安装Flash Player。Flash Player的不同版本，其实与Flash IDE也有一定的对应关系（从上图也能看出来）。但到了AS3时代后，这个对应关系就不那么明显了。Flash Player 9是能支持AS3 的最低版本（其实前面还有一个Flash Player 8.5，只是没普及就升级到9了），后面的Flash Player 都能支持AS3了。关于Flash Player，我写过一篇<a href="http://zengrong.net/post/1188.htm">有史以来关于Flash Player的最详细说明</a>，看这个就很清楚了。
<h3>AIR</h3>
Flash Player 再强大，也是运行在浏览器中，受浏览器约束。为了摆脱浏览器，Adobe又出奇招，发布了AIR。AIR其实就是一个Runtime，你可以把它理解成<a href="http://en.wikipedia.org/wiki/Java_Virtual_Machine">JVM</a>。有了AIR，就可以用AS3开发桌面软件，而且开发出的软件可跨平台运行（这和JAVA的<strong>一次编译，随处运行</strong>不是如出一辙么！)。目前国内的AIR应用主要集中在网站的客户端方面，例如<a href="http://sinatair.sinaapp.com/">新浪微博AIR客户端</a>等。
<h3>SWF SWC SWZ</h3>
<strong>SWF</strong>
swf是我们见到的最多的Flash平台文件了。是的，它就是Flash平台的最终表现形式。前面说到了，无论是Flex、Flash还是纯AS3，最终编译出来的文件都是swf格式，浏览器中的Flash Player插件和独立的Flash Player，也只能“打开”swf文件进行播放。前面说到的AIR，它的本质也就是运行时+swf而已。

其实并非所有的swf都能直接播放的。swf有3种：
<ol>
	<li><strong>程序SWF(application swf)</strong>：可以直接在flash player中运行的swf；</li>
	<li><strong>库SWF（library swf）</strong>：swc文件中的library.swf；</li>
	<li><strong>模块SWF（module swf）</strong>：Flex Module产生的swf文件。</li>
</ol>
最终用户碰到的绝大多数都是“程序SWF”，而程序猿们碰到后面两种SWF的可能性就比较大。

<strong>SWC</strong>

SWC是一种库文件，通常用来发布非开源的类。程序猿们将源码编译成SWC文件，并发布API文档，我们就可以使用这些SWC提供的类库进行自己的开发。SWC并不是运行时共享的，而是在编译的时候直接加入了程序SWF中。最终的程序SWF可以脱离SWC运行。

SWC本质就是一个zip文档，其中包含一个library.swf文件和一个用于描述的xml文件，你可以用zip管理器打开它查看。

<strong>SWZ</strong>

你可能会发现，从<a href="http://zengrong.net/post/tag/tlf" target="_blank">TLF</a>出现以来，Flex SDK中多了一个<a href="http://help.adobe.com/zh_CN/FlashPlatform/reference/actionscript/3/flashx/textLayout/elements/package-detail.html" target="_blank">flashx</a>包，这个包中的功能，就是用SWZ实现的。SWZ是在运行时共享的库，你可以将其看作一个<strong>可以放在外部的SWC</strong>。而且SWZ的共享是平台级别的（Moudle SWF的共享是浏览器级别），存在于操作系统缓存中（Module SWF的存在浏览器缓存），只要下载过一次SWZ，你的操作系统中所有用到这些SWZ中的地方（无论是IE、FF、Chrome还是AIR）都不用重新下载。

对于程序猿，这里的关于SWC和SWZ的信息肯定是不够的，所以建议看一下smithfox的<a href="http://www.smithfox.com/?e=135" target="_blank">swf swc swz RSLs ant</a>，本文的这个部分也是参照它写成的。
