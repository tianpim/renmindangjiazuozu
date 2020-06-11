<!--  -->
<template>
<div class='tt-searchinput'>
    <input type="text" class="serch" placeholder="搜索">
    <div class="serch-button">搜索</div>
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
.tt-searchinput {
    width: 350px;
    height: 40px;
    display: flex;
  .serch {
      width: 280px;
      height: 40px;
      border-right: none;
      border: 1px solid #ddd;
  }

  .serch-button {
      height: 40px;
      width: 60px;
    line-height: 40px;
      text-align: center;
      color: white;
      background-color: #2990d7;
      font-size: 16px;
  }
}
</style>