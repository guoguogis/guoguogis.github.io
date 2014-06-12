---
layout: post
title: AngularJS API HELP
tagline: Supporting tagline
tags: [AngularJS]
categories: [FE]
---
{% include JB/setup %}

-------------
## directive *ng*

+ a
+ form
+ input
+ input *checkbox*
+ input *email*
+ input *number*
+ input *radio*
+ input *text*
+ input *url*
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

<pre><code>
    var des = {};
    var srcs = {
        name: 'misko', 
        gender: 'male',
        geter: function(){     
        }
    };
    angular.extend(des, srcs);
    console.log(des);
</code></pre>


输出：

<code><pre>
{
    gender: "male",
    geter: function (){},
    name: "misko"
}
</pre></code>

+ angular.forEach
    + 遍历对象或者数组并对每一项相应相应的操作;

<code><pre>
    var values = {name: 'misko', gender: 'male'};
    var log = [];
    angular.forEach(values, function(value, key){
       this.push(key + ': ' + value);
    }, log);
</pre></code>

输出结果为:

<code><pre>
["name:misko",
"gender:male"]
</pre></code>

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
    + 创建/获取模块
    
    > When passed two or more arguments, a new module is created.  If passed only one argument, an existing module (the name passed as the first argument to `module`) is retrieved.
    以上为：“当传递两个及以上参数时，创建一个模块，当传递一个参数时，调用已经存在的模块！”


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
