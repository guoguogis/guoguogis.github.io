---
layout: post
title: Flex与后台语言（C#、JAVA、PHP）的数据通信
date: 2012-03-02 10:39
author: guoguogis
comments: true
categories: [flash]
tags: [flash,C#,java,php]
---
Flex作为富客户端展现具有自己完整的一套方案，虽然在热炒的HTML5的冲击下，使得大家有点迷茫，但在我作为一个技术开发人员看来，HTML5要想真正独霸天下还需要很长的一段路要走。OK，废话少说，直奔主题~~

Flex作为前端展现脚本，无法实现与后台数据库的交互，所以要想完成一个完整的项目，就必须Flex+后台语言相组合，这里说的后台语言包括C#、JAVA、PHP等。Flex 与后台语言的交互方式大致有三种：webservice/httpservice/remoteobject,至于每种交互方式的优缺点大家可以看官方文档。

对于C# 与Flex的交互，一般都采用webservice的模式，因为Microsoft提供的开发工具（VS）具有得天独厚的创建webservice服务的功能。

对于Java和Flex的交互，主要采用LCDS(收费)、Blazds（免费）两种方式，大家可以看看我以前在我QQ空间写的文章，空间地址为：http://user.qzone.qq.com/627668470/。这里需要注意的是：Adobe已经将Flex捐赠费Apache社区，所以需要收费的LCDS貌似以后就不支持了，这里还是建议大家使用Blazds，完全可以满足我们的需要。

好的，介绍了前面两种语言与Flex的数据通信，这里我们将重点介绍利用AMF PHP，通过remoteobject的方式进行通信。

一：配置过程：

1、下载<a href="http://sourceforge.net/projects/amfphp/files/#files">AMFPHP</a>;

2、我这里下载的是最新的AMFPHP2.0.1，解压缩文件，可以看到：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/1.png"><img class="alignnone size-full wp-image-215" title="AMFPHP目录" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/1.png" alt="" width="499" height="169" /></a>

第一个文件夹就是我们需要的类库文件，其他文件不解释了！！！

3、作为PHP开发人员，如果你安装了AppServ继承开发环境的话，那么你就可以直接Amfphp文件夹拷贝到AppServ的www文件夹下；如果你安装了其他php服务器，同样原理你可以把Amfphp文件夹拷贝到服务器的部署目录下即可。这里我们就相当于将后台PHP部署好了。

4、开发后台服务代码：

我这里通过Dreamweaver来编写PHP后台代码，因为Dreamweaver提供继承开发环境，可以实时将php编译好的文件部署到服务器上。在Dreamweaver中，首先建立一个站点：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/2.png"><img class="alignnone size-full wp-image-216" title="2" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/2.png" alt="" width="689" height="201" /></a>

设置站点名称和站点文件夹；

设置服务其类型和路径：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/3.png"><img class="alignnone size-full wp-image-217" title="3" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/3.png" alt="" width="687" height="382" /></a>

设置服务器名称，服务器文件夹指向../Amfphp/Services,设置对应的将WebURL地址；然后在“高级”选项卡中将服务器类型选择为PHPMYSQL类型。

编写服务端代码：

在新建的站点flex_php下，创建service.php文件，并编写代码如下：

```
&lt;?php

class Service
{
function getResult($str)
{
return (&quot;result:&quot;.$str);
}

}
?&gt;

```

测试服务端代码：

运行http://localhost:8088/Amfphp/，我们可以看到效果：

<a href="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/5.png"><img class="alignnone size-full wp-image-218" title="5" src="http://www.gisthink.com/blog/guoguogis/wp-content/uploads/2012/03/5.png" alt="" width="545" height="322" /></a>

输入：rest,返回结果如上图所示，则说明服务代码已经创建好，并能够与flex通信了。

5、开发客户端代码：
