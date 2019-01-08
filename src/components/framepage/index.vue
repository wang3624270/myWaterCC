<template>
    <body data-type="index">
    <div class="am-g tpl-g">
        <!-- 头部 -->
        <header>
            <!-- logo -->
            <div class="am-fl tpl-header-logo">
                <a href="/index"><img src="./assets/img/logo1.png" alt=""></a>
            </div>
            <!-- 右侧内容 -->
            <div class="tpl-header-fluid">
                <!-- 侧边切换 -->
                <div class="am-fl tpl-header-switch-button am-icon-list">
                    <span>

                </span>
                </div>
                <!-- 搜索 -->
                <div class="am-fl tpl-header-search">
                    <form class="tpl-header-search-form" action="javascript:;">
                        <button class="tpl-header-search-btn am-icon-search"></button>
                        <input class="tpl-header-search-box" type="text" placeholder="搜索内容...">
                    </form>
                </div>
                <!-- 其它功能-->
                <div class="am-fr tpl-header-navbar">
                    <ul>
                        <!-- 欢迎语 -->
                        <li class="am-text-sm tpl-header-navbar-welcome">
                            <a href="javascript:;">欢迎你, <span>崔用芬</span> </a>
                        </li>

                        <!-- 新邮件 -->
                        <li class="am-dropdown tpl-dropdown" data-am-dropdown>
                            <a href="javascript:;" class="am-dropdown-toggle tpl-dropdown-toggle" data-am-dropdown-toggle>
                                <i class="am-icon-envelope"></i>
                                <span class="am-badge am-badge-success am-round item-feed-badge">4</span>
                            </a>
                            <!-- 弹出列表 -->
                        </li>

                        <!-- 新提示 -->
                        <li class="am-dropdown" data-am-dropdown>
                            <a href="javascript:;" class="am-dropdown-toggle" data-am-dropdown-toggle>
                                <i class="am-icon-bell"></i>
                                <span class="am-badge am-badge-warning am-round item-feed-badge">5</span>
                            </a>

                            <!-- 弹出列表 -->
                        </li>

                        <!-- 退出 -->
                        <li class="am-text-sm">
                            <a href="/">
                                <span class="am-icon-sign-out"></span> 退出
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

        </header>
        <!-- 风格切换 -->
        <div class="tpl-skiner">
            <div class="tpl-skiner-toggle am-icon-cog">
            </div>
            <div class="tpl-skiner-content">
                <div class="tpl-skiner-content-title">
                    选择主题
                </div>
                <div class="tpl-skiner-content-bar">
                    <span class="skiner-color skiner-white" data-color="theme-white"></span>
                    <span class="skiner-color skiner-black" data-color="theme-black"></span>
                </div>
            </div>
        </div>
        <!-- 侧边导航栏 -->
        <div class="left-sidebar">
            <!-- 用户信息 -->
            <div class="tpl-sidebar-user-panel">
                <div class="tpl-user-panel-slide-toggleable">
                    <div class="tpl-user-panel-profile-picture">
                        <img src="./assets/img/afen.jpg" alt="">
                    </div>
                    <span class="user-panel-logged-in-text">
              <i class="am-icon-circle-o am-text-success tpl-user-panel-status-icon"></i>
              崔用芬
          </span>
                    <a href="javascript:;" class="tpl-user-panel-action-link"> <span class="am-icon-pencil"></span> 账号设置</a>
                </div>
            </div>
            <!-- 菜单 -->
            <ul class="sidebar-nav">
                <li class="sidebar-nav-link" v-for="item in this.navItems" :key="item.label">
                    <a href="javascript:;" class="sidebar-nav-sub-title">
                        <span class="am-icon-angle-right sidebar-nav-link-logo"></span> {{item.label}}
                        <span class="am-icon-chevron-down am-fr am-margin-right-sm sidebar-nav-sub-ico"></span>
                    </a>
                    <ul class="sidebar-nav sidebar-nav-sub">
                        <li class="sidebar-nav-link" v-for="subItem in item.children" :key="subItem.label">
                            <a href="#" @click="selectMenu(item,subItem)">
                                <span class="am-icon-angle-right sidebar-nav-link-logo"></span> {{subItem.label}}
                            </a>
                        </li>
                    </ul>
                </li>

            </ul>
        </div>
        <!-- 内容区域 -->
        <div class="tpl-content-wrapper">
            <div class="row-content am-cf">
                <div class="widget am-cf">
                    <div class="widget-head am-cf">
                        <div class="widget-title  am-cf">{{title}}</div>
                    </div>
                    <div class="widget-body">
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </body>
</template>

<script>
    import './assets/css/common.css';
    import './assets/css/amazeui.min.css';
    import './assets/css/amazeui.datatables.min.css';
    import './assets/css/app.css';
    import {theme} from './assets/js/theme'
    import {app} from './assets/js/app'
    import navItems from './navItems';


    export default {
        data () {
            return {
                navItems:navItems,
                title:''
            }
        },
        mounted(){
            theme();
            app();
        },
        methods:{
            selectMenu(item,subItem){
                this.title=item.label+' — '+subItem.label;
                this.$router.push({
                   path:subItem.path
                });
            }
        }
    }
</script>

<style scoped>

</style>
