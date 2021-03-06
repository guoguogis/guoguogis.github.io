---
layout: post
title: GIS中的空间参考系和投影坐标系统区别详解
date: 2012-04-27 10:05
author: guoguogis
comments: true
categories: [thinking]
tags: [GIS]
---

### 摘要

GIS处理的对象为空间数据，而空间数据相对于一般数据的特性为其包含地理参考，所以要建立GIS系统，就首先要解决数据的空间参考问题。本文以ArcGIS中空间数据的更新为例，详细阐述了GIS中地理坐标系、地图投影系统和地理网格在表达地理空间数据的异同。

### 关键字

地理信息系统 地理坐标系 投影坐标系  地理格网  ArcGIS

### 1引言

地理信息系统（Geographical Information System,简称GIS）是在计算机软硬件支持下，对整个或者部分地球表层空间中的有关地理分布数据进行采集、存储、管理、运算、分析、显示和描述的计算机系统。
地理信息系统以空间实体为主要研究对象，以具体点、线、面等几何图形对空间实体的模拟。而要对表达空间实体进行更加准确的表达，则需要对空间实体的空间位置、分布、形态、空间关系等基本特征进行精确的描述，合乎逻辑的表达，所以地理实体的空间参考是构建GIS系统的基础。确定地理实体的空间参考对建立GIS系统虽然非常重要，但是由于空间参考的理论和公式比较抽象，仍然有很多相关专业从业人员不能很好地理解和掌握其本质理论，则不可避免地在实际工作中带来困扰和麻烦，本文则从GPS测图技术得到的数据在ArcGIS中进行数据更新出发，详细阐述了GIS中相关地理实体的空间参考的理论。

### 2地理实体的空间参考系统
地理实体的空间参考系统目前主要有地理坐标系统、地图投影系统和地理网格三种方法来表达，其中前两者分别对应ArcGIS中的Geographic Coordinate Systyem和Projected coordinate System，如图1所示。而相对于地理网格而言，目前尚处在理论研究阶段，还没有具体的系统的应用。

空间任一实体的地理信息都可以通过上述三种方法来表达，对于利用不同方法表达的区别，具体介绍如下：
图1  ArcGIS中的两种地理空间参考系统

### 3地理坐标系
地理坐标系（Geographic coordinate system），是以经纬度为存储单位的球面坐标系统，而球面坐标系根据其围绕地球的自转和围绕太阳的公转的不同可以分为天文坐标系和地球坐标系，天文坐标系常用于描述天体、卫星位置和状态等。而地球坐标系根据坐标原点的不同，又可以分为地心直角坐标系和大地坐标系。地球坐标系中，经过某点的经度为经过该点的子午圈截面与格林威治子午线的夹角，纬度为该点在地球表面的法线与赤道的交角。在地图学中，地球坐标系又可以分为地心坐标系和大地坐标系。地心坐标系，即地心直角坐标系，是以地球质心为原点的空间直角坐标系，或以球心与地球质心重合的地球椭球面为基准面所建立的坐标系。而目前在地图学中常用大地坐标系统来定义地理坐标。大地坐标系是大地测量中以参考椭球面为基准面建立起来的坐标系。。大地坐标系除了经纬度外，还包括一个沿着法线到大地球面的距离值，从而在空间上形成笛卡尔空间坐标系统。

我们要将地球上的数字化信息存放到球面坐标系统上，如何进行操作呢？地球是一个不规则的椭球，如何将数据信息以科学的方法来表达？这必然要求我们找到这样的一个椭球体来模拟地球，它是地球表面在经过大地水准面一级逼近后的二级逼近。这样的椭球体具有特点：可以量化计算的。具有长半轴，短半轴，偏心率。如下图2以ArcGIS中北京-1954坐标系来说明：

图2 北京54坐标系的相关参数

如上图示，Datum：D_Beijing_1954表示大地水准面

>Spheroid: Krasovsky_1940表示克拉索夫斯基椭球体<br>
>Semimajor Axis：6378245.0000000000 表示长半轴<br>
>Semiminor Axis：6356863.0187730473  表示短半轴<br>
>Inverse Flattening：298.300000000000  表示扁率<br>

由上，知道大地水准面和地球椭球体后，地理坐标系就定义完成并可以使用了。

我国的大地坐标系经过几十年的发展，逐渐从当初的混乱状态已经发展形成为一个完善的坐标体系，形成了北京54、西安80和2000国家大地坐标系。

#### 3.1北京54坐标系
建国初期，由于条件限制，没有建立适合我国具体要求的坐标系统，而是在东北黑龙江边境上同苏联大地网联测，推算出北京点的坐标，形成北京54坐标系（具体参数如图2），其原点不在北京，而在前苏联的普尔科沃。该坐标系采用克拉索夫斯基椭球体为参考椭球，高程系统采用1956年黄海平均海水面为基准。该系统虽然在当时基本解决了我国国土调查、测量的难题，生产了国家基本数据。但是经过几十年的实践证明，克拉索夫斯基椭球体不能很好的贴近我国的大地测量工作的需要，给测量归算工作带来不便，并造成误差累计。

#### 3.2西安80坐标系
鉴于北京54坐标系的不足，为了适应我国大地测量工作的深入发展的需要，我国于1978年决定建立中国国家大地坐标系。1980国家大地坐标系采用了1975年国际大地测量协会推荐的参考椭球，大地原点设在我国西安市泾阳县永乐镇。

具体参数如下图3示：

图3 西安80坐标系相关参数

该系统的椭球参数精度与我国大地水准面能够较好的吻合；全国整体平差，提高了平差结果的精度坐标统一；大地原点在我国中部，缩短了推算大地坐标的路程，减少了推算误差的积累。

#### 3.3 2000国家大地坐标系
虽然西安80坐标系相对北京54坐标系精度较高，为我国的经济建设做出了很大的贡献，但是受当时技术条件的制约，它已不能满足当今和今后空间技术的发展，无法提供高精度，地心，动态，动态，使用的大地坐标系的基础性保障。并且随着近年来GPS等现代空间大地测量技术的迅速发展，地心坐标系逐渐取代非地心坐标系，新的坐标系统的建立势在必行。2008年7月7日国家测绘局向社会发布了2000国家大地坐标系椭球参数，其参数具体如下：

>长半轴              a＝6378137m<br>
>扁率                <em>f</em>=1/298.257222101<br>
>地心引力常数       GM＝3.986004418×10<sup>14</sup>m<sup>3</sup>s<sup>-2</sup><br>
>自转角速度        ω＝7.292l15×10<sup>-5</sup>rad s<sup>-1</sup><br>

《关于印发启用2000国家大地坐标系实施方案的通知》规定：2000国家大地坐标系与现行国家大地坐标系转换、衔接的过渡期为8—10年。 现有各类测绘成果，在过渡期内可沿用现行国家大地坐标系；2008年7月1日后新生产的各类测绘成果应采用2000国家大地坐标系。 现有地理信息系统，在过渡期内应逐步转换到2000国家大地坐标系；2008年7月1日后新建设的地理信息系统应采用2000国家大地坐标系。

#### 3.4其他坐标系
WGS-84  世界大地坐标系也是一种地心坐标系，目前得到的遥感和GPS数据一般都采用该坐标系。具体参数如下图4：

图4

### 4地图投影系统
由于经纬度所表示的地理信息是基于球面的，而在GIS中，空间表象的表征通常以平面图形来表示，所以如何将球面坐标转换为平面坐标就需要进行地图投影，建立球面坐标和平面坐标间一一对应的关系，完成球面和平面的转换，从而形成投影坐标系（Projected coordinate System）。投影坐标系为平面坐标系，单位为米。

#### 4.1关于地图投影系统的整体理解
以ARCGIS软件投影设置为例，北京地区东经116度，其按6度分带后的中央经线为东经117度，其高斯-克吕格投影设置如图5所示：

图5显示了高斯克吕格投影坐标系的一些参数：

以下为北京地区高斯克吕格投影坐标系的一些参数，因为高斯投影是分带的，不同不同地区高斯投影的带号是不一样的。

>Projection: Gauss_Kruger<br>
>Parameters:<br>
>False_Easting: 500000.000000<br>
>False_Northing: 0.000000<br>
>Central_Meridian: 117.000000<br>
>Scale_Factor: 1.000000<br>
>Latitude_Of_Origin: 0.000000<br>
>Linear Unit: Meter (1.000000)<br>
>Geographic Coordinate System:<br>
>Name: GCS_Beijing_1954<br>
>Alias:<br>
>Abbreviation:<br>
>Remarks:<br>
>Angular Unit: Degree (0.017453292519943299)<br>
>Prime Meridian: Greenwich (0.000000000000000000)<br>
>Datum: D_Beijing_1954<br>
>Spheroid: Krasovsky_1940<br>
>Semimajor Axis: 6378245.000000000000000000<br>
>Inverse Flattening: 298.300000000000010000<br>

由上面各参数看出，每个投影系统，都包含一个地理坐标系统（即包含有椭球参数信息，上述参数中下划线部分所示），所以从另外一个方面可以说：

投影坐标系统系统=椭球投影方法

此外，由于地图投影只是通过一定的数学公式将球面坐标转换为平面坐标，难免出现一些偏差，如方位、角度、面积等，所以应根据需要具体选择投影方式。为了在一定范围内保证精度，控制投影的变形不致过大，则需要对投影进行分带。即在具体投影时根据不同区域的位置所处的经度计算出当地的中央经线，然后选择具体的投影方法。

#### 4.2常用地图投影系统
常用的投影系统包括几种。本文则主要以高斯克吕格投影为例展开阐述。
##### 4.2.1高斯克吕格(Gauss-Kruger)投影
高斯-克吕格（Gauss-Kruger）投影，是一种“等角横切圆柱投影”。 高斯一克吕格投影后，除中央经线和赤道为直线外，其他经线均为对称于中央经线的曲线。高斯－克吕格投影没有角度变形，在长度和面积上变形也很小，中央经线无变形，自中央经线向投影带边缘，变形逐渐增加，变形最大处在投影带内赤道的两端。由于其投影精度高，变形小，而且计算简便（各投影带坐标一致，只要算出一个带的数据，其他各带都能应用），因此在大比例尺地形图中应用，可以满足军事上各种需要，并能在图上进行精确的量测计算。我国大于等于50万的大中比例尺地形图多采用六度带高斯-克吕格投影，三度带高斯-克吕格投影多用于大比例尺测图，如城建坐标多采用三度带的高斯-克吕格投影。

图7

##### 4.2.2墨卡托(Mercator)投影
墨卡托(Mercator)投影，是一种"等角正切圆柱投影”，没有角度变形，由每一点向各方向的长度比相等，它的经纬线都是平行直线，且相交成直角，经线间隔相等，纬线间隔从标准纬线向两极逐渐增大。墨卡托投影的地图上长度和面积变形明显，但标准纬线无变形，从标准纬线向两极变形逐渐增大，但因为它具有各个方向均等扩大的特性，保持了方向和相互位置关系的正确。在地图上保持方向和角度的正确是墨卡托投影的优点，墨卡托投影地图常用作航海图和航空图，如果循着墨卡托投影图上两点间的直线航行，方向不变可以一直到达目的地，因此它对船舰在航行中定位、确定航向都具有有利条件，给航海者带来很大方便。

图6

##### 4.2.3通用横轴墨卡托（UTM）投影
UTM（universal traverse Mercator）投影全称为“通用横轴墨卡托投影”，是一种“等角横轴割圆柱投影”，椭圆柱割地球于南纬80度、北纬84度两条等高圈，投影后两条相割的经线上没有变形，而中央经线上长度比0.9996。UTM投影是为了全球战争需要创建的，美国于1948年完成这种通用投影系统的计算。与高斯-克吕格投影相似，该投影角度没有变形，中央经线为直线，且为投影的对称轴，中央经线的比例因子取0.9996是为了保证离中央经线左右约330km处有两条不失真的标准经线。UTM投影分带方法与高斯-克吕格投影相似，是自西经180°起每隔经差6度自西向东分带，将地球划分为60个投影带。
大部分的卫星影像和局部地图资料常采用UTM投影。

### 4.4高斯克吕格投影与UTM投影中的坐标轴偏移
高斯- 克吕格投影与UTM投影是按分带方法各自进行投影，故各带坐标成独立系统。以中央经线（L0）投影为纵轴X，赤道投影为横轴Y，两轴交点即为各带的坐标原点。为了避免横坐标出现负值，高斯- 克吕格投影与UTM北半球投影中规定将坐标纵轴西移500公里当作起始轴，而UTM南半球投影除了将纵轴西移500公里外，横轴南移10000公里。由于高斯-克吕格投影与UTM投影每一个投影带的坐标都是对本带坐标原点的相对值，所以各带的坐标完全相同，为了区别某一坐标系统属于哪一带，通常在横轴坐标前加上带号，如(4231898m，21655933m)，其中21即为带号。这里注意的是，高斯克吕格投影的横坐标为7位，纵坐标为6位，若超出6位，则前两位为代号。

### 4.3高斯-克吕格投影与UTM投影比较
高斯-克吕格(Gauss-Kruger)投影与UTM投影（Universal Transverse Mercator，通用横轴墨卡托投影）都是横轴墨卡托投影的变种，目前一些国外的软件或国外进口仪器的配套软件往往不支持高斯-克吕格投影，但支持UTM投影，如ArcView 3.3版本，因此常有把UTM投影当作高斯-克吕格投影的现象。实际上，两者的区别主要体现在以下几方面：

从投影几何方式看，高斯-克吕格投影是“等角横切圆柱投影”，投影后中央经线保持长度不变，即比例系数为1；UTM投影是“等角横轴割圆柱投影”，圆柱割地球于南纬80度、北纬84度两条等高圈，投影后两条割线上没有变形，中央经线上长度比0.9996。

从计算结果看，两者主要差别在比例因子上，高斯-克吕格投影中央经线上的比例系数为1， UTM投影为0.9996，高斯-克吕格投影与UTM投影可近似采用 X[UTM]=0.9996 * X[高斯]，Y[UTM]=0.9996 * Y[高斯]，进行坐标转换（注意：如坐标纵轴西移了500000米，转换时必须将Y值减去500000乘上比例因子后再加500000）。

从分带方式看，两者的分带起点不同，高斯-克吕格投影自0度子午线起每隔经差6度自西向东分带，第1带的中央经度为3°；UTM投影自西经180°起每隔经差6度自西向东分带，第1带的中央经度为-177°，因此高斯-克吕格投影的第1带是UTM的第31带。此外，两投影的东伪偏移都是500公里，高斯-克吕格投影北伪偏移为零，UTM北半球投影北伪偏移为零，南半球则为10000公里。

### 5地理网格
地理网格是将平面以某种规则分级的空间数据结构，具有较高的标准化程度，它有利于面向空间数据库和几何操作算法的研究和开发。即不仅可以类似于栅格数据用最小单元网格来表达空间对象，还可以像矢量数据那样用网格点代替传统的最标点来表达空间实体的几个特征，所以使用地理网格可以将地理空间定位和地理特征描述关联起来，以网格单位作为基本分辨率，控制在允许的误差范围内。

目前，建立全球地理网格模型还面临许多困难，这些困难主要来自于基于地理坐标系统的地理网格还存在一些缺陷，例如网格单元面积不等所带来的复杂性，网格的各种形式的变形，网格复杂的邻接特性，这些都给实际应用带来了困难。作为一种新的表达空间实体的方法，也是GIS研究的一个热门的方向，但是目前技术尚未成熟，在基础GIS平台，如ArcGIS中还没有具体应用。

### 6 ArcGIS中对数据空间参考的管理
ArcGIS系统可以从三个方面来理解，一个地图，一个工具，一个数据集，分别对应ArcMap、ToolBox、ArcCatlog。而在这三中情况下，都可以对数据定义坐标系统。在ArcMap中，添加图层后默认图层集的参考系统为第一个被添加的图层的参考系统，可以通过右键点击图层或者图层集来设置参考系统；在ToolBox中，可以通过Data management Tools;Projections and Transferance来定义、转换参考系统。在ArcCatlog中建立Geodatabase或者新建shape文件时同样可以编辑文件，为其设置空间参考。

### 7 结论
参考系统作为GIS系统建立的基础，在GIS中发挥着重要作用。而如何更加准确的表达空间实体，模拟空间位置关系，则是GIS地理基础需要提高和改进的关键。本文详细阐述了……

### 参考文献
汤国安、杨昕 《ArcGIS地理信息系统空间分析实验教程》<br>
刘湘南、黄方、王平  《GIS空间分析原理与方法》<br>
蔡孟裔等 《新编地图学教程》<br>
吴信才等  《地理信息系统原理与方法》<br>
国家测绘局 《关于印发启用2000国家大地坐标系实施方案的通知》<br>
国家测局《2000大地坐标系统技术指南》<br>
部分图片来自互联网。

