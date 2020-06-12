<!--  -->
<template>
<div class='tt-newsList'>
    <div class="tt-newsList-refresh">点击刷新</div>
    <div class="tt-newsList-item">
        <div class="left">
            <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
        </div>
        <div class="right">
            <div class="title">沙发</div>
            <div class="user">
                <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
                <div class="nickName">哈哈</div>
            </div>
            <div class="data">2020-6-12 13:30:50</div>
        </div>
    </div>
    <div class="tt-newsList-item">
        <div class="left">
            <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
        </div>
        <div class="right">
            <div class="title">沙发</div>
            <div class="user">
                <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
                <div class="nickName">哈哈</div>
            </div>
            <div class="data">2020-6-12 13:30:50</div>
        </div>
    </div>
    <div class="tt-newsList-item">
        <div class="left">
            <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
        </div>
        <div class="right">
            <div class="title">沙发</div>
            <div class="user">
                <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
                <div class="nickName">哈哈</div>
            </div>
            <div class="data">2020-6-12 13:30:50</div>
        </div>
    </div>
    <div class="tt-newsList-item">
        <div class="left">
            <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
        </div>
        <div class="right">
            <div class="title">沙发</div>
            <div class="user">
                <img src="http://b-ssl.duitang.com/uploads/item/201607/15/20160715194914_eBKxY.thumb.700_0.jpeg" alt="">
                <div class="nickName">哈哈</div>
            </div>
            <div class="data">2020-6-12 13:30:50</div>
        </div>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
//import引入的组件需要注入到对象中才能使用
components: {},
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
.tt-newsList {
    margin-top: 10px;
    .tt-newsList-refresh {
        height: 30px;
        width: 480px;
        border: 1px solid #3192d5;
        border-radius: 5px;
        margin-bottom: 10px;
        font-size: 14px;
        color: #3192d5;
        line-height: 30px;
        text-align: center;
        background-color: rgba(65, 243, 225, 0.596);
    }
    .tt-newsList-item {
        display: flex;
        border-bottom: 1px solid #ddd;
        .left {
            height: 100px;
            width: 160px;
            padding: 5px;
            img {
                height:100%;
                width: 100%;
            }
        }
        .right {
            flex: 2;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 5px;
            .title {
                font-weight:600;
            }

            .user {
                display: flex;
                img {
                    width: 30px;
                    height: 30px;
                    border-radius: 50%;
                }

                .nickName {
                    width: 100px;
                    height: 30px;
                    color:#7b7b7b;
                    line-height: 30px;
                    font-size: 16px;
                }
            }

            .data {
                color:#7b7b7b;
                font-size: 16px;
            }
        }
    }
}
</style>