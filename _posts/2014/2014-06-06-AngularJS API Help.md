AngularJS-API-Help
==================

---------------------

# AngularJS 初始化：
## AngularJS的自执行函数：
```js
bindJQuery();

publishExternalAPI(angular);

jqLite(document).ready(function() {
    angularInit(document, bootstrap);
});
```
+ 其中`bindJQuery`方法用来检测是否引用了jQuery，若没有引用则用`jQlite`.
+ 其中`publishExternalAPI`代码如下：
```js
function publishExternalAPI(angular) {
    extend(angular, {...
    });

    angularModule = setupModuleLoader(window);
    try {
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
> 通过`extend`方法将公共方法挂载到`angular`对象上;
> 通过`setupModuleLoader`(模块加载器)来创建、加载模块;
> 通过`angularModule`来定义`ng`模块(命名空间)，并挂载内置的指令，如：`ngBind`等,具体指令用法在后面会一一举例说明;

## AngularJS的执行函数：
```js
!window.angular.$$csp() && window.angular.element(document).find('head').prepend('<style type="text/css">@charset "UTF-8";[ng\\:cloak],[ng-cloak],[data-ng-cloak],[x-ng-cloak],.ng-cloak,.x-ng-cloak,.ng-hide{display:none !important;}ng\\:form{display:block;}</style>');
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


# AngularJS Help
## directive [ng]

+ a
+ form
+ input
+ input [checkbox]
+ input [email]
+ input [number]
+ input [radio]
+ input [text]
+ input [url]
+ ngApp
+ ngBind
+ ngBindHtmlUnsafe
+ ngBindTemplate
+ ngChange
+ ngChecked
+ ngClass
+ ngClassEven
+ ngClassOdd
+ ngClick
+ ngCloak
+ ngController
+ ngCsp
+ ngDblclick
+ ngDisabled
+ ngForm
+ ngHide
+ ngHref
+ ngInclude
+ ngInit
+ ngList
+ ngModel
+ ngMousedown
+ ngMouseenter
+ ngMouseleave
+ ngMousemove
+ ngMouseover
+ ngMouseup
+ ngMultiple
+ ngNonBindable
+ ngPluralize
+ ngReadonly
+ ngRepeat
+ ngSelected
+ ngShow
+ ngSrc
+ ngStyle
+ ngSubmit
+ ngSwitch
+ ngTransclude
+ ngView
+ script
+ select
+ textarea


## filter
+ currency
+ date
+ filter
+ json
+ limitTo
+ lowercase
+ number
+ orderBy
+ uppercase


## service

+ $anchorScroll
+ $cacheFactory
+ $compile
+ $controller
+ $document
+ $exceptionHandler
+ $filter
+ $http
+ $httpBackend
+ $interpolate
+ $locale
+ $location
+ $log
+ $parse
+ $q
+ $rootElement
+ $rootScope
+ $route
+ $routeParams
+ $templateCache
+ $timeout
+ $window


## Types

+ Module
+ Attributes
+ Scope
+ FormController
+ NgModelController


## global APIs

+ angular.bind
+ angular.bootstrap
+ angular.copy
+ angular.element
+ angular.equals
+ angular.extend
    + 继承，将src中的所有属性挂载到des对象上;
```js
var des = {};
var srcs = {
    name: 'misko', 
    gender: 'male',
    geter: function(){
       
    }
};
angular.extend(des, srcs);
console.log(des);
```
> gender: "male"
> geter: function (){}
> name: "misko"

+ angular.forEach
    + 遍历对象或者数组并对每一项相应相应的操作;
```js
    var values = {name: 'misko', gender: 'male'};
    var log = [];
    angular.forEach(values, function(value, key){
       this.push(key + ': ' + value);
    }, log);
```
    + 输出结果为:
    > 0:"name:misko"
    > 1:"gender:male"

+ angular.fromJson
+ angular.identity
+ angular.injector
+ angular.isArray
+ angular.isDate
+ angular.isDefined
+ angular.isElement
+ angular.isFunction
+ angular.isNumber
+ angular.isObject
+ angular.isString
+ angular.isUndefined
+ angular.lowercase
+ angular.mock
+ angular.module
+ angular.noop
+ angular.toJson
+ angular.uppercase
+ angular.version
+ module


## ngMock

#### service
+ $exceptionHandler
+ $httpBackend
+ $log
+ $timeout

#### global APIs
+ angular.mock.dump
+ angular.mock.inject
+ angular.mock.module
+ angular.mock.TzDate
+ module


## AUTO

#### service
+ $injector
+ $provide


## ngCookies
#### service
+ $cookies
+ $cookieStore


## ngMockE2E
#### service
+ $httpBackend


## ngResource
#### service
+ $resource


## ngSanitize
#### directive
+ ngBindHtml
#### filter
+ linky
#### service
+ $sanitize


---------------------
edit by jeosea at 2014.06.10
