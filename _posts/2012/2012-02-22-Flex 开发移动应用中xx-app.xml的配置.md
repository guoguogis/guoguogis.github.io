---
layout: post
title: Flex 开发移动应用中xx-app.xml的配置
date: 2012-02-22 09:44
author: guoguogis
comments: true
categories: [flash]
tags: [flash]
---
正式开发Flex移动应用已经两周时间了，本以为对其已经很熟悉了的，结果今天编写了一个在地图上定位的应用，却怎么都用不了定位功能，一度还认为是在室内不能够定位呢，汗！！！

查找原因，原来是配置文件中没有将被注释的用于定位信息的配置放开，注意这里说的配置是相对于Android来说的。为了彻底搞清楚这个问题，我研究了相关帮助，地址为：<a href="http://www.gisthink.com/blog/wordpress/wp-admin/post-new.php">http://www.gisthink.com/blog/wordpress/wp-admin/post-new.php</a>。OK，废话少说，直接上源码，逐项解释一遍呗。

[code lang="xml"]
&lt;android&gt;
&lt;colorDepth&gt;16bit&lt;/colorDepth&gt;
&lt;manifestAdditions&gt;&lt;![CDATA[
&lt;manifest android:installLocation=&quot;auto&quot;&gt;
&lt;!--See the Adobe AIR documentation for more information about setting Google Android permissions--&gt;
&lt;!--允许进行网络请求和远程调试，默认情况下选择该项。如果取消该项，则不能调试设备上的应用程序--&gt;
&lt;uses-permission android:name=&quot;android.permission.INTERNET&quot;/&gt;
&lt;!--选择该项，则允许应用程序将数据写入到设备上的外部内存卡--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.WRITE_EXTERNAL_STORAGE&quot;/&gt;--&gt;
&lt;!--选择此项，则将来电音频设置为静音，比如后台播放音频时来电音频则可设置为静音--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.READ_PHONE_STATE&quot;/&gt;--&gt;
&lt;!--允许访问GPS位置，通过GeoLocation类来访问GPS数据--&gt;
&lt;uses-permission android:name=&quot;android.permission.ACCESS_FINE_LOCATION&quot;/&gt;
&lt;!--应同时切换 DISABLE_KEYGUARD 和 WAKE_LOCK 权限，选择此项则通过SystemIdleMode类来设置进入休眠状态--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.DISABLE_KEYGUARD&quot;/&gt;--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.WAKE_LOCK&quot;/&gt;--&gt;
&lt;!--允许访问摄像头--&gt;
     &lt;!--&lt;uses-permission android:name=&quot;android.permission.CAMERA&quot;/&gt;--&gt;
&lt;!--允许访问麦克风--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.RECORD_AUDIO&quot;/&gt;--&gt;
&lt;!--应同时切换 ACCESS_NETWORK_STATE 和 ACCESS_WIFI_STATE 权限，选择此项允许访问与设备关联的网络接口，使用NetWorkInfo类来使用网络接口信息--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.ACCESS_NETWORK_STATE&quot;/&gt;--&gt;
&lt;!--&lt;uses-permission android:name=&quot;android.permission.ACCESS_WIFI_STATE&quot;/&gt;--&gt;
&lt;/manifest&gt;
]]&gt;
&lt;/manifestAdditions&gt;
&lt;/android&gt;
[/code]

对于不同的设备分辨率，我们可以通过使用一系列图标设置不同的ICON图标：

[code lang="xml"]
&lt;icon&gt;
&lt;image16x16&gt;assets/icons/16.png&lt;/image16x16&gt;
&lt;image29x29&gt;assets/icons/29.png&lt;/image29x29&gt;
&lt;image32x32&gt;assets/icons/32.png&lt;/image32x32&gt;
&lt;image36x36&gt;assets/icons/36.png&lt;/image36x36&gt;
&lt;image48x48&gt;assets/icons/48.png&lt;/image48x48&gt;
 &lt;!--   &lt;image50x50&gt;assets/icons/50.png&lt;/image50x50&gt; --&gt;
&lt;image57x57&gt;assets/icons/57.png&lt;/image57x57&gt;
&lt;!--   &lt;image58x58&gt;assets/icons/58.png&lt;/image58x58&gt; --&gt;
&lt;image72x72&gt;assets/icons/72.png&lt;/image72x72&gt;
&lt;image114x114&gt;assets/icons/114.png&lt;/image114x114&gt;
&lt;image128x128&gt;assets/icons/128.png&lt;/image128x128&gt;
&lt;image512x512&gt;assets/icons/512.png&lt;/image512x512&gt;
&lt;/icon&gt;
[/code]

除此之外还有一些比如初始化参数、id等的配置我就不多解释了，大家都明白的。</pre>
