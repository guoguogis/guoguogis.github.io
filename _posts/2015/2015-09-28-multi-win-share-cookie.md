---
layout: post
title: 浏览器中的cookie共享问题
tagline: Supporting tagline
tags: [浏览器兼容]
categories: [HTML]
comments: true

---
{% include JB/setup %}
----------
+ chrome、firefox、IE8是共享cookie的，当打开一个窗口登录后，重新打开一个窗口访问同一个页面，这时候能够直接访问该页面，而不需要登录。
+ IE9、IE10、IE11不共享cookie,当打开一个窗口登录后，重新打开一个窗口访问同一个页面，这个时候会要求重新登录。
+ IE11早期版本当在新打开一个窗口时，不共享cookie,而重新打开一个窗口后，修改cookie会影响到前一个窗口中的cookie，为BUG。[详见](https://connect.microsoft.com/IE/feedback/details/810700/subject-ie11-is-losing-cookie-information-and-thus-becoming-detached-from-a-web-application-session)
