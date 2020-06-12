<!--  -->
<template>
<div class='tt-index'>
    <!-- 网页头部开始 -->
    <div class="header">
        <Header></Header>
    </div>
    <!-- 网页头部结束 -->
    <!-- 首页内容开始 -->
    <div class="tt-content">
        <!-- 内容区域左边部分 -->
        <div class="tt-content-left">
            <Nav class="tt-content-nav"></Nav>
        </div>
        <!-- 内容区域中间部分 -->
        <div class="tt-content-middle">
            <Port></Port>
            <NewsList></NewsList>
        </div>
        <!-- 内容区域右边部分 -->
        <div class="tt-content-right">
            <!-- 搜索框开始 -->
            <div class="searchinput">
                <SearchInput></SearchInput>
            </div>
            <!-- 搜索框结束 -->
            <!-- 登录组件开始 -->
            <div class="login">
                <Login></Login>
            </div>
            <!-- 登录组件结束 -->
        </div>
    </div>
    <!-- 首页内容结束 -->
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import Header from "../components/header/Header";
import Nav from "../components/nav/Nav";
import SearchInput from "../components/searchinput/SearchInput";
import Login from "../components/login/Login";
import Port from "../components/port/Port";
import NewsList from "../components/newslist/NewsList";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    Header,
    Nav,
    SearchInput,
    Login,
    Port,
    NewsList,
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style lang='less' scoped>
.tt-index {
    .header {
        header {

        }
    }

    .tt-content {
        width: 100vw;
        padding: 10px 5vw 0 10vw;
        display: flex;
        .tt-content-left {
            flex: 1;
            .tt-content-nav{
                margin: 0 auto;
            }
        }

        .tt-content-middle {
            flex: 2;
            padding: 5px;
        }

        .tt-content-right {
            flex: 2;
            margin-left: 37px;
            .login{
                margin-top: 10px;
                padding: 30px;
                width: 420px;
                background-color:#ddd;
            }
        }
    }
}
</style>