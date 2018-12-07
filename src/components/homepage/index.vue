<template>
    <div>
    <body class="no-trans scroll-spy">
    <div class="modal fade" id="project-1" tabindex="-1" role="dialog" aria-labelledby="project-1-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-1-label">数据相关</h4>
                </div>
                <div class="modal-body">
                    <h3>SQOOP（数据采集）</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Sqoop是一款开源的工具，主要用于在Hadoop(Hive)与传统的数据库(mysql、postgresql...)间进行数据的传递，可以将一个关系型数据库（例如 ： MySQL ,Oracle ,Postgres等）中的数据导进到Hadoop的HDFS中，也可以将HDFS的数据导进到关系型数据库中。Sqoop项目开始于2009年，最早是作为Hadoop的一个第三方模块存在，后来为了让使用者能够快速部署，也为了让开发人员能够更快速的迭代开发，Sqoop独立成为一个Apache项目.</p>
                            <p>对于某些NoSQL数据库它也提供了连接器。Sqoop，类似于其他ETL工具，使用元数据模型来判断数据类型并在数据从数据源转移到Hadoop时确保类型安全的数据处理。Sqoop专为大数据批量传输设计，能够分割数据集并创建Hadoop任务来处理每个区块。Sqoop支持增量更新，将新记录添加到最近一次的导出的数据源上，或者指定上次修改的时间戳.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-1.jpg" alt=""style=" width: 300px;">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div><div class="modal fade" id="project-2" tabindex="-1" role="dialog" aria-labelledby="project-2-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-2-label">分析相关</h4>
                </div>
                <div class="modal-body">
                    <h3>R语言与RServer</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>R是用于统计分析、绘图的语言和操作环境。R是属于GNU系统的一个自由、免费、源代码开放的软件，它是一个用于统计计算和统计制图的优秀工具。R是一套由数据操作、计算和图形展示功能整合而成的套件。包括：有效的数据存储和处理功能，一套完整的数组（特别是矩阵）计算操作符，拥有完整体系的数据分析工具，为数据分析和显示提供的强大图形功能，一套（源自S语言）完善、简单、有效的编程语言（包括条件、循环、自定义函数、输入输出功能）。R是一套完整的数据处理、计算和制图软件系统。其功能包括：数据存储和处理系统；数组运算工具（其向量、矩阵运算方面功能尤其强大）；完整连贯的统计分析工具；优秀的统计制图功能；简便而强大的编程语言：可操纵数据的输入和输出，可实现分支、循环，用户可自定义功能.</p>
                            <p>R作为一种统计分析软件，是集统计分析与图形显示于一体的。它可以运行于UNIX,Windows和Macintosh的操作系统上，而且嵌入了一个非常方便实用的帮助系统，相比于其他统计分析软件，R还有以下特点：<br><div class="media-right"><i class="fa fa-desktop"></i> 1.R是自由软件,它是完全免费,开放源代码的;</div><br><div class="media-right"><i class="fa fa-desktop"></i> 2.R是一种可编程的语言,作为一个开放的统计编程环境,语法通俗易懂,很容易学会和掌握语言的语法;</div><br><div class="media-right"><i class="fa fa-desktop"></i> 3.所有R的函数和数据集是保存在程序包里面的,使用时进行载入;</div><br><div class="media-right"><i class="fa fa-desktop"></i> 4.R具有很强的互动性，例如：同窗口的输入输出、错误提示，历史输入记忆，输出保存，与其他编程环境的良好接口等;</div><br><div class="media-right"><i class="fa fa-desktop"></i> 5.如果加入R的帮助邮件列表一,每天都可能会收到几十份关于R的邮件资讯.</div>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-2.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div><div class="modal fade" id="project-3" tabindex="-1" role="dialog" aria-labelledby="project-3-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-3-label">数据相关</h4>
                </div>
                <div class="modal-body">
                    <h3>Hive/MySQL（数据存储）</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>Hive是基于Hadoop的一个数据仓库工具，可以将结构化的数据文件映射为一张数据库表，并提供简单的sql查询功能，可以将sql语句转换为MapReduce任务进行运行。 其优点是学习成本低，可以通过类SQL语句快速实现简单的MapReduce统计，不必开发专门的MapReduce应用，十分适合数据仓库的统计分析。因此将大量用于分析的大数据放在Hive中，可实现高效的查询及分析.主要分为以下几个部分：</p>
                            <p>&nbsp&nbsp<strong>用户接口</strong></p>
                            <p>&nbsp&nbsp<strong>元数据存储:</strong>Hive 将元数据存储在数据库中，如 mysql、derby。Hive 中的元数据包括表的名字，表的列和分区及其属性，表的属性（是否为外部表等），表的数据所在目录等.</p>
                            <p>&nbsp&nbsp<strong>解释器、编译器、优化器、执行器:</strong>解释器、编译器、优化器完成 HQL 查询语句从词法分析、语法分析、编译、优化以及查询计划的生成。生成的查询计划存储在 HDFS 中，并在随后由 MapReduce 调用执行.</p>
                            <p>&nbsp&nbsp<strong>Hadoop:</strong>Hive 的数据存储在 HDFS 中，大部分的查询由 MapReduce 完成（包含 * 的查询，比如 select * from tbl 不会生成 MapReduce 任务）。</p>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-3.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div><div class="modal fade" id="project-4" tabindex="-1" role="dialog" aria-labelledby="project-4-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-4-label">可视化相关</h4>
                </div>
                <div class="modal-body">
                    <h3>Echart图形展示</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>一个纯 Javascript 的图表库，可以流畅的运行在 PC 和移动设备上，兼容当前绝大部分浏览器（IE8/9/10/11，Chrome，Firefox，Safari等），底层依赖轻量级的 Canvas 类库 ZRender，提供直观，生动，可交互，可高度个性化定制的数据可视化图表。除提供常规的图形外，还提供了用于统计的盒形图，用于地理数据可视化的地图，热力图，线图，用于关系数据可视化的关系图，treemap，多维数据可视化的平行坐标，还有用于 BI 的漏斗图，仪表盘，并且支持图与图之间的混搭。并且支持多个坐标系的图形图像绘制.</p>
                            <p>并具有多个特性：丰富的图标类型；多个坐标系的支持；移动端的优化（轻量级）；深度的交互式数据探索；大数据量的展现；多维数据的支持以及丰富的视觉编码手段；动态的数据以及绚丽的特效.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-4.jpg" alt="">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div><div class="modal fade" id="project-5" tabindex="-1" role="dialog" aria-labelledby="project-5-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-5-label">分析相关</h4>
                </div>
                <div class="modal-body">
                    <h3>Weka学习库</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>是一款免费的，非商业化（与之对应的是SPSS公司商业数据挖掘产品--Clementine ）的，基于JAVA环境下开源的机器学习（machine learning）以及数据挖掘（data mining）软件.</p>
                            <p>WEKA作为一个公开的数据挖掘工作平台，集合了大量能承担数据挖掘任务的机器学习算法，包括对数据进行预处理，分类，回归、聚类、关联规则以及在新的交互式界面上的可视化。</p>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-5.jpg" alt="" style=" width: 300px;">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div><div class="modal fade" id="project-7" tabindex="-1" role="dialog" aria-labelledby="project-7-label" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">×</span><span class="sr-only">Close</span></button>
                    <h4 class="modal-title" id="project-7-label">可视化相关</h4>
                </div>
                <div class="modal-body">
                    <h3>R图形库</h3>
                    <div class="row">
                        <div class="col-md-6">
                            <p>R语言不仅在统计分析，数据挖掘领域，计算能力强大。在数据可视化上，也不逊于昂贵的商业软件，只有想不到的图形，没有R实现不了的图形。当然，背后离不开各种开源软件包的支持，Cairo就是这样一个用于矢量图形处理的类库，Cairo可以创建高质量的矢量图形(PDF, PostScript, SVG) 和 位图(PNG, JPEG, TIFF)，同时支持在后台程序中高质量渲染.</p>
                        </div>
                        <div class="col-md-6">
                            <img src="./assets/image/portfolio-7.jpg" alt="" style="width:260px">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    <!-- scrollToTop -->
    <!-- ================ -->
    <div class="scrollToTop"><i class="icon-up-open-big"></i></div>


    <!-- header start -->
    <!-- ================ -->
    <header class="header fixed clearfix navbar navbar-fixed-top">
        <div class="container">
            <div class="row">
                <div class="col-md-4">

                    <!-- header-left start -->
                    <!-- ================ -->
                    <div class="header-left clearfix">

                        <!-- logo -->
                        <div class="logo smooth-scroll">
                            <a href="/"><img id="logo" src="./assets/image/logo.png" alt="WaterSA"></a>
                        </div>

                        <!-- name-and-slogan -->
                        <div class="site-name-and-slogan smooth-scroll">
                            <div class="site-name"><a href="/">WaterSA</a></div>
                            <div class="site-slogan">水务大数据分析平台<a target="_blank" href="/">--Water Service Platform</a></div>
                        </div>

                    </div>
                    <!-- header-left end -->

                </div>
                <div class="col-md-8">

                    <!-- header-right start -->
                    <!-- ================ -->
                    <div class="header-right clearfix">

                        <!-- main-navigation start -->
                        <!-- ================ -->
                        <div class="main-navigation animated">

                            <!-- navbar start -->
                            <!-- ================ -->
                            <nav class="navbar navbar-default" role="navigation">
                                <div class="container-fluid">

                                    <!-- Collect the nav links, forms, and other content for toggling -->
                                    <div class="collapse navbar-collapse scrollspy smooth-scroll" id="navbar-collapse-1">
                                        <ul class="nav navbar-nav navbar-right">
                                            <li class="active"><a href="/">主页</a></li>
                                            <li class=""><a href="#whome">平台简介</a></li>
                                            <li class=""><a href="#wsituation">水务现状</a></li>
                                            <li class=""><a href="#wtechnology">相关技术</a></li>
                                            <li class=""><router-link to="/index">水务工作</router-link></li>

                                        </ul>
                                    </div>

                                </div>
                            </nav>
                            <!-- navbar end -->

                        </div>
                        <!-- main-navigation end -->

                    </div>
                    <!-- header-right end -->

                </div>
            </div>
        </div>
    </header>
    <!-- header end -->

    <!-- banner start -->
    <!-- ================ -->
    <div id="banner" class="banner">
        <div class="banner-image" style="position: relative; z-index: 0; background: none;">
            <div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 779px; width: 1423px; z-index: -999998; position: absolute;">
                <img src="./assets/images/banner.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1423px; height: 942.737px; max-height: none; max-width: none; z-index: -999999; left: 0px; top: -106.369px;">
            </div>
        </div>
        <div class="banner-caption">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2 object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn">
                        <h1 class="text-center" style=" font-family: cursive;">水务大数据 <span>Analysis</span></h1>
                        <p class="lead text-center">智慧水务不仅与仪表和传感器相关，“智慧”的实现应当是在一个更庞大的系统中，将水务运营工艺与操作流程数字化，并通过大数据、云计算等技术将信息在数字层面挖掘水务公司资产的价值提升潜力</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- banner end -->




    <!-- section start -->
    <!-- ================ -->
    <div id="whome" class="section clearfix object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn">
        <div class="container">
            <div class="row">
                <div class="col-md-12" >
                    <h1 class="title text-center" style=" font-family: cursive;">About <span>平台简介</span></h1>
                    <p class="lead text-center">平台集成了数据网络、水表等传感器、数据分析和数据管理工具，使得自来水系统更为清晰和可控.</p>
                    <div class="space"></div>
                    <div class="row">
                        <div class="col-md-6">
                            <img src="./assets/image/section-image-1.png" alt="">
                            <div class="space"></div>
                        </div>
                        <div class="col-md-6">
                            <p>在线监测设备实时感知城市供排水系统的运行状态，将海量水务信息进行及时分析与处理，辅助决策建议，以更加精细和动态的方式管理水务。水质监测是水污染防治的重要环节，基于数据分析的环保工作提供了坚实可靠的数据基础.</p>
                            <p>该系统的核心是数据网络（Star Network），这是一个抄表解决方案，通过一个安全的远距离无线网络提供全面的数据获取;同时，依靠一种声学泄漏检测系统（STAR ZoneScan），可以及时发现泄漏点，减少非收益水损失.</p>
                            <ul class="list-unstyled">
                                <li><h4><i class="fa fa-caret-right pr-10 text-colored"></i> <span>智慧水务，</span>有效的数据采集是基础</h4></li>
                                <li><h4><i class="fa fa-caret-right pr-10 text-colored"></i> <span>智慧水务，</span>数据分析是关键</h4></li>
                                <li><h4><i class="fa fa-caret-right pr-10 text-colored"></i> <span>智慧水务，</span>数据延伸服务一体化</h4></li>
                            </ul>
                        </div>
                    </div>
                    <div class="space"></div>
                    <h2>平台功能</h2>
                    <div class="row">
                        <div class="col-md-6">
                            <p><span style="color:#0356f3;">数据采集</span>---以国家标准规定的采集频率对水表和水质检测仪上读取检测数据，对异常数据进行检测标记，并使用Sqoop技术将检测数据存储在基于Hadoop集群的Hive数据库中，以备后期的分析工作及报表生成所用.</p>
                            <p><span style="color:#0356f3;">数据分析</span>---对采集到的数据进行大数据分析，例如：多源异构数据分类分析和挖掘；创建水质、流域、时间等多指标体系的横纵向结合的多维分析工具，支持自定义分析主题（如：相关性、周期性、文本分析...）；水质评估模型训练等.</p>
                            <p><span style="color:#0356f3;">预测预警、延伸服务及报表</span>---通过对采集到的数据进行分析，产生预测信息，对异常数据进行相关的问题报警；通过与住房、气候等一系列数据整合分析，为用户提供水务互联网服务，从而在水资源极度紧张的状况下，有效地节省每一滴水.</p>
                        </div>
                        <div class="col-md-6">
                            <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingOne">
                                        <h4 class="panel-title">
                                            <a data-toggle="collapse" data-parent="#accordion" href="./assets/index.jsp#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                有效的数据采集基础
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseOne" class="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
                                        <div class="panel-body">
                                            大数据处理、挖掘模型等技术相对通用，但产生智慧的基础数据，却需要一点一滴地积累。当前建设智慧水务，积累有效的“海量数据”已成为当务之急；而水表遍布千家万户，水表流量数据中蕴含着社会生产生活各方面的丰富信息，是行业天然的数据价值源泉.
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingTwo">
                                        <h4 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="./assets/index.jsp#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                有价值的数据分析关键
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                                        <div class="panel-body">
                                            结合当下流行的大数据分析等技术(Hadoop、HDFS、Hive、Sqoop、R语言与RServer、Weka学习库等等)，以及机器学习等方法，推动水务迈入大数据时代，水务数据迈入智能化.
                                        </div>
                                    </div>
                                </div>
                                <div class="panel panel-default">
                                    <div class="panel-heading" role="tab" id="headingThree">
                                        <h4 class="panel-title">
                                            <a class="collapsed" data-toggle="collapse" data-parent="#accordion" href="./assets/index.jsp#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                智慧水务数据延伸服务一体化
                                            </a>
                                        </h4>
                                    </div>
                                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                                        <div class="panel-body">
                                            把水务信息与数十个关于住房地点、房龄、气候和入住率的数据点整合到一起进行分析、预测，为用户提供水务互联网服务（如：给用户提供个性化用水报告、为节水行为打分、提示花园灌溉许可日期和许可量），也可大大节省用水量.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- section end -->

    <!-- section start -->
    <!-- ================ -->
    <div class="section translucent-bg bg-image-1 blue" id="wsituation" >
        <div class="container object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn">
            <h1 class="text-center title" style=" font-family: cursive;">智慧水务国内外研究现状</h1>
            <div class="space"></div>
            <div class="row">
                <div class="col-sm-6">
                    <div class="media">
                        <div class="media-body text-right">
                            <h4 class="media-heading"><a href="https://www.globalwaterintel.com/" style="color:#053569;">Home - Global Water Intelligence</a></h4>
                            <p>GWI来自英国牛津、专注于为国际水务交流合作提供平台，至今已有十余载专业经验。亦是最权威的全球水务行业商务情报提供商，依托逾15年的全球情报网络和实践积累，提供高价值商业信息与行业洞见。我们致力于追踪世界范围内的重要水务项目，实时更新项目进展,同时助您掌握全球水务行业最新技术前沿.</p>
                        </div>
                        <div class="media-right">
                            <i class="fa fa-cog"></i>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-body text-right">
                            <h4 class="media-heading"><a></a>苏伊士--2017年度智慧水务公司（全球水奖）</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                        <div class="media-right">
                            <i class="fa fa-check"></i>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-body text-right">
                            <h4 class="media-heading">Service 3</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                        <div class="media-right">
                            <i class="fa fa-desktop"></i>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-body text-right">
                            <h4 class="media-heading">Service 4</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                        <div class="media-right">
                            <i class="fa fa-users"></i>
                        </div>
                    </div>
                </div>
                <div class="space visible-xs"></div>
                <div class="col-sm-6">
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-leaf"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Service 5</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-area-chart"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Service 6</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-child"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Service 7</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                    </div>
                    <div class="media">
                        <div class="media-left">
                            <i class="fa fa-codepen"></i>
                        </div>
                        <div class="media-body">
                            <h4 class="media-heading">Service 8</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure aperiam consequatur quo quis exercitationem reprehenderit dolor vel ducimus, voluptate eaque suscipit iste placeat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- section end -->

    <!-- section start -->
    <!-- ================ -->
    <div class="section" id="wtechnology" >
        <div class="container">
            <h1 class="text-center title" style=" font-family: cursive;"><span>相关技术</span></h1>
            <div class="separator"></div>
            <p class="lead text-center">在此将本平台所用到的技术和工具进行简介，分别包含了：<br> 数据相关---Sqoop（数据采集），Hive/MySQL（数据存储）；<br> 分析相关---R语言与RServer，Weka学习库...；<br> 可视化相关---Echart，R图形库...</p>
            <br>
            <div class="row object-non-visible animated object-visible fadeIn" data-animation-effect="fadeIn">
                <div class="col-md-12">

                    <!-- isotope filters start -->
                    <div class="filters text-center">
                        <ul class="nav nav-pills">
                            <li class="active"><a href="./assets/index.jsp#" data-filter="*">All</a></li>
                            <li><a href="./assets/index.jsp#" data-filter=".web-design">数据相关</a></li>
                            <li><a href="/assetsindex.jsp#" data-filter=".app-development">分析相关</a></li>
                            <li><a href="./assets/index.jsp#" data-filter=".site-building">可视化相关</a></li>
                        </ul>
                    </div>
                    <!-- isotope filters end -->

                    <!-- portfolio items start -->
                    <div class="isotope-container row grid-space-20" style="position: relative; height: 400px;">
                        <div class="col-sm-6 col-md-3 isotope-item web-design" style="position: absolute; left: 0px; top: 0px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-1.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-1">
                                        <i class="fa fa-search-plus"></i>
                                        <span>数据相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-1">Sqoop（数据采集）</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>

                        <div class="col-sm-6 col-md-3 isotope-item app-development" style="position: absolute; left: 292px; top: 0px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-2.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-2">
                                        <i class="fa fa-search-plus"></i>
                                        <span>分析相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-2">R语言与RServer</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>

                        <div class="col-sm-6 col-md-3 isotope-item web-design" style="position: absolute; left: 585px; top: 0px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-3.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-3">
                                        <i class="fa fa-search-plus"></i>
                                        <span>数据相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-3">Hive/MySQL（数据存储）</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>

                        <div class="col-sm-6 col-md-3 isotope-item site-building" style="position: absolute; left: 877px; top: 0px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-4.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-4">
                                        <i class="fa fa-search-plus"></i>
                                        <span>可视化相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-4">Echart</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>

                        <div class="col-sm-6 col-md-3 isotope-item app-development" style="position: absolute; left: 0px; top: 233px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-5.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-5">
                                        <i class="fa fa-search-plus"></i>
                                        <span>分析相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-5">Weka学习库</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>



                        <div class="col-sm-6 col-md-3 isotope-item site-building" style="position: absolute; left: 292px; top: 233px;">
                            <div class="image-box">
                                <div class="overlay-container">
                                    <img src="./assets/image/portfolio-7.jpg" alt="" style=" height: 175px;width: 261px">
                                    <a class="overlay" data-toggle="modal" data-target="#project-7">
                                        <i class="fa fa-search-plus"></i>
                                        <span>可视化相关</span>
                                    </a>
                                </div>
                                <a class="btn btn-default btn-block" data-toggle="modal" data-target="#project-7">R图形库</a>
                            </div>
                            <!-- Modal -->

                            <!-- Modal end -->
                        </div>

                    </div>
                    <!-- portfolio items end -->

                </div>
            </div>
        </div>
    </div>
    <!-- section end -->
    <!-- footer start -->
    <!-- ================ -->
    <footer id="footer">

        <!-- .subfooter start -->
        <!-- ================ -->
        <div class="subfooter">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <p class="text-center">Copyright © 2017 山东大学 cyf . &nbsp&nbsp&nbsp联系邮箱：123456@163.com</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- .subfooter end -->

    </footer>
    <!-- footer end -->
    </body>
    </div>
</template>

<script>
    import './assets/css/bootstrap.css';
    import './assets/css/font-awesome.css';
    import './assets/css/animations.css';
    import './assets/css/style.css';
    import './assets/css/custom.css';
    import './assets/css/common.css'
    import {scroll} from './assets/js/template'

    export default {
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            scroll();
        }
    }
</script>

<style scoped>

</style>
