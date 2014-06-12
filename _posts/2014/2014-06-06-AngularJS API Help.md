---
title: AngularJS 初始化过程
layout: page
category : lessons
tagline: "Supporting tagline"
tags : [AngularJS]
comments: true
---
{% include JB/setup %}

# AngularJS 初始化：
## AngularJS的自执行函数：

```js
  bindJQuery();
  publishExternalAPI(angular);
  jqLite(document).ready(function(){
      angularInit(document, bootstrap);
  });
```

+ 其中`bindJQuery`方法用来检测是否引用了jQuery，若没有引用则用`jQlite`.
+ 其中`publishExternalAPI`代码如下.

```js
function publishExternalAPI(angular) {
  extend(angular, {...
  });
  angularModule = setupModuleLoader(window);
  try{
    angularModule('ngLocale');
  } catch (e) {
    angularModule('ngLocale', []).provider('$locale', $LocaleProvider);
  }
  angularModule('ng', ['ngLocale'], ['$provide',
    function ngModule($provide) {...
    }
  ]);
}
```

 通过`extend`方法将公共方法挂载到`angular`对象上;
> 通过`setupModuleLoader`(模块加载器)来创建、加载模块angular.module,即angularModule;
> 通过`angularModule`来定义`ng`模块(命名空间)，并挂载内置的指令，如：`ngBind`等,具体指令用法在后面会一一举例说明;
+ 其中`angularInit`用来获取页面标记的`ng-app`区域;

## AngularJS的执行函数：
```js
!window.angular.$$csp() 
  && window.angular.element(document).find('head').prepend(
  '<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>'
  );
```
+ 判断页面是否添加`ng-csp`，如果添加则返回，如果没有添加则在head中添加代码：
```html
<style type="text/css">
    @charset "UTF-8";
    [ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide
    {
        display:none !important;
    }
    ng\\:form
    {
        display:block;
    }
</style>
```
> csp(Content-Security-Policy):浏览器内容安全策略，

edit by jeosea on 2014.06.10
