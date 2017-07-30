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
{% highlight xml%}
<android>
<colorDepth>16bit</colorDepth>
<manifestAdditions>
<![CDATA[
<manifest android:installLocation="auto">
<!--See the Adobe AIR documentation for more information about setting Google Android permissions-->
<!--允许进行网络请求和远程调试，默认情况下选择该项。如果取消该项，则不能调试设备上的应用程序-->
<uses-permission android:name="android.permission.INTERNET"/>
<!--选择该项，则允许应用程序将数据写入到设备上的外部内存卡-->
<!--<uses-permission android:name="android.permission.WRITE_EXTERNAL_STORAGE"/>-->
<!--选择此项，则将来电音频设置为静音，比如后台播放音频时来电音频则可设置为静音-->
<!--<uses-permission android:name="android.permission.READ_PHONE_STATE"/>-->
<!--允许访问GPS位置，通过GeoLocation类来访问GPS数据-->
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION"/>
<!--应同时切换 DISABLE_KEYGUARD 和 WAKE_LOCK 权限，选择此项则通过SystemIdleMode类来设置进入休眠状态-->
<!--<uses-permission android:name="android.permission.DISABLE_KEYGUARD"/>-->
<!--<uses-permission android:name="android.permission.WAKE_LOCK"/>-->
<!--允许访问摄像头-->
     <!--<uses-permission android:name="android.permission.CAMERA"/>-->
<!--允许访问麦克风-->
<!--<uses-permission android:name="android.permission.RECORD_AUDIO"/>-->
<!--应同时切换 ACCESS_NETWORK_STATE 和 ACCESS_WIFI_STATE 权限，选择此项允许访问与设备关联的网络接口，使用NetWorkInfo类来使用网络接口信息-->
<!--<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE"/>-->
<!--<uses-permission android:name="android.permission.ACCESS_WIFI_STATE"/>-->
</manifest>
]]>
</manifestAdditions>
</android>
{% endhighlight %}

对于不同的设备分辨率，我们可以通过使用一系列图标设置不同的ICON图标：

{% highlight xml%}
<icon>
<image16x16>assets/icons/16.png</image16x16>
<image29x29>assets/icons/29.png</image29x29>
<image32x32>assets/icons/32.png</image32x32>
<image36x36>assets/icons/36.png</image36x36>
<image48x48>assets/icons/48.png</image48x48>
 <!--   <image50x50>assets/icons/50.png</image50x50> -->
<image57x57>assets/icons/57.png</image57x57>
<!--   <image58x58>assets/icons/58.png</image58x58> -->
<image72x72>assets/icons/72.png</image72x72>
<image114x114>assets/icons/114.png</image114x114>
<image128x128>assets/icons/128.png</image128x128>
<image512x512>assets/icons/512.png</image512x512>
</icon>
{% endhighlight %}

除此之外还有一些比如初始化参数、id等的配置我就不多解释了，大家都明白的。