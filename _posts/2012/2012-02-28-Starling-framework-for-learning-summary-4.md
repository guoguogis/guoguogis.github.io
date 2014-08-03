---
layout: post
title: Starling 框架学习总结四 之 纹理篇
date: 2012-02-28 08:14
author: guoguogis
comments: true
categories: [flash]
tags: [starling]
---
前面学习了starling 的工作原理，事件机制等内容，这里我们继续学习一个比较酷的内容：纹理。

###一：Image：

Starling中Image和Texture的关系类似于Flash原生API中Bitmap和BitmapData，比Bitmap好的地方是可以相应鼠标事件。

```
public function Image(texture:Texture)
 {}
```

由Image的构造函数可以看出：构造一个Image必须有一个纹理作为参数才能显示出来。

&nbsp;

###二：Texture：

Mip 映射是一个重要却简单易懂的概念。将一个纹理保存多个缩小版本的方式就叫做 Mip 映射【PS：如一个 256*256 尺寸的纹理被保存了 128*128、64*64….1*1 这么多版本的纹理于内存中】。

需要注意的是，若要使用Mip映射，那么你的纹理尺寸必须保证为2的倍数（1, 2, 4, 8, 16, 32, 64, 128, 256,512, 1024, 2048), 但形状不一定必须是矩形。如果你没有遵守这个规则，那么Starling将会为你自动创建一个与当前纹理尺寸最接近的能被2整除的数值作为尺寸的纹理（如你使用的纹理尺寸为31*31，那么Starling会为你创建一个32*32尺寸的纹理），但这可能会对内存有一点消耗。为了确保尽可能地优化纹理的内存占用，我们建议您最好使texture atlases（翻译成中文叫做纹理贴图集，但是没多少人会用中文称呼之），也被广泛称作SpriteSheet（翻译成中文叫做精灵表，但是也没人这么叫它，都直接用英文名称呼的）的素材集成、使用方式。稍后我们会接着讨论它。

为了保证最佳的呈现品质，GPU 需要一个图片的全部 Mip 映射等级，即由原始尺寸依次除
以二直到除不尽 2 了为止。 【PS：对于一个 128*128 尺寸的纹理来说，它的全部 Mip映射等级为：64*64,32*32,16*16,8*8,4*4,2*2以及 1*1】<span style="color: #ff0000;">Starling框架能够自动替你生成全部 Mip 映射等级</span>，若是你不用 Starling框架的话，那你就得通过使用 BitmapData.draw 这个 API 并使用一个缩小一倍的 Matrix 作为参数来手动地生成全部的映射等级。

<span style="color: #ff0000;">建议为2D内容使用Mip映射，这样可以使它们在缩放时能够减少锯齿的产生。</span>

在Starling中使用Mip映射只需要设置某个纹理对象的mipmapping为true即可。

```
texture.frame = new Rectangle(5, 5, 30, 30);
var image:Image = new Image(texture);
```

上面代码通过纹理的frame来设置显示区域大小并将其显示出来。

使用Image和Texture的一般流程为：

1、通过绑定或者外部加载图片素材作为Bitmap或者Bitmapdata；

2、通过Texture类的静态方法来构造纹理对象；

3、构造Image对象，并将image对象添加到场景中；

```
var image:Image = new Image(Texture.fromBitmap(new Sausage()));
```

需要注意的是可以为多个image对象共用一个纹理对象。这样就可以在构造多个相同纹理的image时节省很大的空间，因为在构造纹理的过程中创建创建Mip也是比较耗费内存的一件事。

除此之外，starling中的image对象还添加了属性：

1、smoothing

smoothing = TextureSmoothing.BILINEAR/NONE/ TRILINEAR

该属性用来为图像进行缩放时进行滤镜处理。

2、color

该属性允许你为一个图片指定一个颜色值。在 Image 对象中，每个像素的颜色值都是由其纹理的颜色值和你指定的 color 颜色值混合的结果。【PS：所以此 color 属性其实就是让你设置一个背景底色】这个特性就允许我们可以为图像进行着色，以创建出使用同一个纹理却有颜色差别的多个变种图片，这样就避免了为每个外观都特定地制作对应的纹理了。

<a href="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/31.png"><img class="alignnone size-medium wp-image-206" title="3" src="http://www.gisthink.com/blog/wordpress/wp-content/uploads/2012/02/31-300x130.png" alt="" width="300" height="130" /></a>

&nbsp;

Texture支持的素材的格式：

<span style="color: #008000;">∗ PNG : 由于所需素材中经常需要保留透明通道，因此PNG格式的文件是Texture最常用的素材格式。 </span>
<span style="color: #008000;">∗ JPEG : 经典的JPEG格式文件也可以为Texture所用。有一点需要注意，就是在GPU中该格式的图片会被解压缩，这意味着JPEG格式的文件将无法发挥其节省空间的优势，且其不保留透明通道哦 </span>
<span style="color: #008000;">∗ JPEG-XR : JPEG XR是一个为了让图片色调更加连贯，视觉效果更加逼真而存在的图片压缩标准及图片文件格式，它是基于一种被称作HD Photo的技术（起初由Microsoft微软公司开发并拥有专利，曾用名为Windows Media Photo）。它同时支持有损和无损压缩，且它是Ecma-388 Open XML Paper Specification文档标准推荐的图片存储优先格式。 </span>
<span style="color: #008000;">∗ ATF : Adobe Texture Format. 这是一种能提供最佳压缩效果的文件格式。 ATF文件</span>
<span style="color: #008000;">主要是一个存储有损纹理数据（lossy texture data）的文件容器。它主要使用了两种</span>
<span style="color: #008000;">类似技术：JPEG-XR1压缩技术和基于块的压缩技术（简称块压缩技术），来实现它</span>
<span style="color: #008000;">的有损压缩。 </span>
<span style="color: #008000;">JPEG-XR压缩技术提供了一种非常有竞争力的方式来节省存储空间及网络带宽。而块压缩技术则提供了一种能够在客户端削减纹理存储空间（与一般的RGBA纹理文件所占存储空间的比例为1:8）的方式。 ATF提供了三种块压缩技术： DXT12, ETC13 及PVRTC4. </span>