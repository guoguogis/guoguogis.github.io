---
layout: post
title: [转]Stage3D AGAL中的顶点变换运算解析
date: 2012-05-14 15:58
author: guoguogis
comments: true
categories: [flash]
tags: [AGAL, Stage 3D]
---
我们在Stage3D的底层API编写中，会经常遇到要处理以下情形：Vertex顶点在3D空间中的变换。这个行为会根据Render机制的不断刷新而形成3D物体在空间中整体坐标变换。

在编写Stage3D的应用中，最基础常见的AGAL OpCode是这样：

```
m44 op,va0,vc0
```
这个简单的OpCode构成了寄存器中的Vertex坐标的动态变换。那么接下来，就给出从头至尾的原理分析。
首先，我们先要了解Stage3D API基本原理之外的矩阵乘法，如果你求学时代已经学过大量的矩阵计算理论，那么你应该庆幸你当初学习的这部分知识并不是没用的花瓶，现在终于有了用武之地。

矩 阵乘法的基本理论是：一个mxn的矩阵A能够与一个nxr的矩阵B相乘，结果是一个mxr的矩阵。例如，一个4x2矩阵和一个2x3的矩阵相乘，结果是一 个4x3的矩阵C，C中的任意元素C[ij]就是A的第i行向量与B中的第j列向量的点乘结果。那么矩阵相乘的核心是：矩阵A的列，必须和矩阵B的行数量 匹配，否则矩阵乘法无意义。如果用图来表示，如下图：
<img title="" src="http://www.7yue.com/upload/matrixmultiply.png" alt="" />

在 Stage3D中，每一个Vertex顶点可以看做是一个1x3的矩阵[x,y,z]，但是在3D环境中由于有齐次坐标w的存在，所以，我们经常将某个 vertex的坐标真正定义为1x4矩阵[x,y,z,w]，如果w=1，表示将3D空间内的点都投影到w=1的4D平面上，齐次坐标公式是[x/w,y /w,z/w]，由于w=1，所以自然也就成为我们平常所理解的[x,y,z]。而w=0的意义，则表示4D空间无穷远的点，自然也就成为了方向上的描 述，所以在Stage3D中的矩阵乘法，w坐标的0,就是顶点平移转换的开关。如果这里实在太难理解了，建议各位去wiki上仔细阅读一些基础3D理论。 所以，顶点变换的矩阵乘法是这样图示（缩放，旋转和平移可以自由设定4x4 Matrix3D矩阵中的行列值来获得）：

<img title="" src="http://www.7yue.com/upload/vertextransform.png" alt="" />

谈到这里，就不难理解Stage3D顶点位置变换了。下面把基础理论，AGAL OpCode和Stage3D API揉在一起，看看一个基本的顶点变化操作，在Stage3D里怎么搞定的。AS代码：

基本AGAL Vertex顶点变换：
```
vertexShader=new AGALMiniAssembler();
vertexShader.assemble(Context3DProgramType.VERTEX,
"m44 op va0,vc0\n"+ //va0的vertex顶点坐标与vc0中的4x4 Matrix3D进行顶点变换的矩阵乘法，结果放在op位置输出寄存器中
"mov v0,va1\n" //va1的vertex 的UV或色彩值放置在v0中，v0则是vertex和fragment公用寄存器变量，这里va1取决于你的顶点Vector数据结构构成
);

Vertex顶点寄存器设定：
context3d.setVertexBufferAt(0,vertexBuffer,0,Context3DVertexBufferFormat.FLOAT_2);
context3d.setVertexBufferAt(1,vertexBuffer,5,Context3DVertexBufferFormat.FLOAT_3);
context3d.setVertexBufferAt(2,vertexBuffer,5,Context3DVertexBufferFormat.FLOAT_4);

顶点变换矩阵设定：
model3D.identity();
model3D.appendRotation(getTimer()/50,Vector3D.Z_AXIS);

//如有缩放，平移等3D空间内变换，需要将模型，视图和投影的Matrix3D进行总体矩阵相乘后得到最终的变换矩阵
//modelView3D.identity();
//modelView3D.append(model3D);
//modelView3D.append(view3D);
//modelView3D.append(projection3D);

context3d.setProgramConstantsFromMatrix(
Context3DProgramType.VERTEX,
0, model3D, true );//model3D可以换成modelView3D
```
按照上面的理论实现的代码，你将会得到一个顶点vertex可以变换的3D物体。整个应用程序的代码可以从这里下载。
<a href="http://www.7yue.com/upload/Stage3d_triangle.zip" target="_blank">Stage3d_triangle.zip</a>

希望这篇文章对于Stage3D基础计算理论还不清楚的朋友有所帮助。Enjoy it!

&nbsp;

原文地址：<a title="http://www.7yue.com/post/469.html" href="http://www.7yue.com/post/469.html">http://www.7yue.com/post/469.html</a>
