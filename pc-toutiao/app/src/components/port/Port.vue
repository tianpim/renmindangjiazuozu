<!--  -->
<template>
<div class='tt-port'>
    <div class="port-top">
        <div :class="['navs-item',{active:item.title === nav}]" v-for="item in navs" :key="item.id" @click.stop="changeNav(item.title)">
            {{item.title}}
        </div>
    </div>
    <div class="smallHeadLine" v-show="nav==='发微头条'">
        <div class="port-middle">
            <textarea name="" id="" cols="30" rows="10" textarea maxlength="2000" placeholder="有什么新鲜事想告诉大家"></textarea>
        </div>
        <div class="port-bottom">
            <!-- 图片按钮 -->
            <div class="left">
                <div class="left-title" @click.stop="toogleUploadImgArea">图片</div>
                <div class="upload-imgs-area" v-show="showUploadImgArea">
                    <!-- 上传的图片 -->
                    <div class="img-item" v-for="item,index in uploadImgs" :key="item">
                        <img :src="item" alt=""/>
                        <!-- 删除按钮 -->
                        <div class="deleteImg" @click.stop="deleteImg(index)">
                            ×
                        </div>
                    </div>
                    <div class="upload">
                        <div class="title">+</div>
                        <input type="file" multiple accept=".jpg, .png" @change="uploadImgChange">
                    </div>
                </div>
            </div>
            <!-- 发布按钮 -->
            <div class="right">
                发布
            </div>
        </div>
    </div>
    <div class="writeArticle" v-show="nav==='写文章'">
        <input type="text" placeholder="请输入内容" />
        <vue-editor v-model="richContent" class="rich-editor" />
        <div class="rich-publish">发布</div>
    </div>  
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import { VueEditor } from "vue2-editor";
export default {
//import引入的组件需要注入到对象中才能使用
components: {
    VueEditor,
},
data() {
//这里存放数据
return {
    navs:[
        {id:1,title:"发微头条"},
        {id:2,title:"写文章"},
    ],
    //当前导航栏
    nav:"发微头条",
    //是否显示上传图片区域
    showUploadImgArea:false,
    //上传的图片
    uploadImgs:[],
    //富文本编辑器的内容值
    richContent: "", 
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
    //切换导航栏
    changeNav(title){
        this.nav = title;
    },
    //切换图片上传区域
    toogleUploadImgArea(){
        this.showUploadImgArea = !this.showUploadImgArea;
    },
    //图片上传事件
    uploadImgChange(e){//e为事件源
        // console.log(e.target.files);//可以获取到上传的文件的信息
        // Array.form()可以将类数组转化为数组
        /*
            FormData对象用以将数据编译成键值对，以便用XMLHttpRequest来发送数据。
            其主要用于发送表单数据，但亦可用于发送带键数据(keyed data)，而独立于表单使用。
            如果表单enctype属性设为multipart/form-data ，则会使用表单的submit()方法来发送数据，
            从而，发送数据具有同样形式。
        */
        Array.from(e.target.files).forEach(v => {
            let params = new FormData();
            params.append("file",v);
            /* 
                params.append("file",v);会构造出如下的请求参数
                {
                    file:文件的数据
                }
            */
            //向后台发送请求
            this.$axios.post("/aliossUpload",params).then((res)=>{
                console.log(res.url);
                //将请求到的上传到后台的数据存到data中
                this.uploadImgs.push(res.url);
            });
        })
    },
    //删除上传图片
    deleteImg(index){
        this.uploadImgs.splice(index,1);
    }
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
.tt-port {
    width: 480px;
    padding: 15px;
    box-shadow: 2px 2px 5px black;
    border:1px solid #ddd;
    .port-top {
        width: 100%;
        height: 50px;
        border: 1px solid #ddd;
        display: flex;
        align-items: center;
        font-weight: 600;
        .navs-item{
            margin-left: 10px;
        }
        .active{
            color: #75a2df;
            border-bottom: 2px solid var(--themeColor);
        }
    }
    .smallHeadLine{
        .port-middle {
            textarea {
                width: 100%;
                height: 170px;
                padding: 5px;
            }
        }
    
        .port-bottom {
            width: 100%;
            height: 50px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            border:1px solid #ddd;
            margin-top: -5px;
            .left {
                width: 120px;
                height: 50px;
                .left-title{
                    text-align: center;
                    line-height: 50px;
                    &:hover{
                        color: #75a2df;
                        background-color: #e6f7f8;
                    }
                }
                .upload-imgs-area {
                    width: 320px;
                    display: flex;
                    flex-wrap: wrap;
                    border: 1px solid #ddd;
                    background-color: white;
                    box-shadow: 2px 2px 2px gray;
                    .img-item {
                        width: 100px;
                        height: 100px;
                        position: relative;
                        border: 1px dotted #ddd;
                        img {
                            width: 100px;
                            height: 100px;
                        }
                        div.deleteImg {
                            position: absolute;
                            display: none;
                            top: 50%;
                            left: 50%;
                            width: 100px;
                            height: 100px;
                            line-height: 100px;
                            text-align: center;
                            background-color: transparent;
                            transform: translate(-50%,-50%);
                            font-size: 30px;
                            color: gray;
                            transition: all 2s;
                        }
                        &:hover{
                            div.deleteImg{
                                background-color: rgba(0, 0, 0, .6);
                                color: white;
                                display: block;
                            }
                        }
                    }
                    .upload {
                        width: 100px;
                        height: 100px;
                        position: relative;
                        .title {
                            font-size: 50px;
                            line-height: 100px;
                            text-align: center;
                            color: gray;
                            width: 100px;
                            height: 100px;
                            border: 1px dotted #ddd;   
                        }
                        input {
                            opacity: 0;
                            position: absolute;
                            top: 0;
                            left: 0;
                            width: 100%;
                            height: 100%;
                        }
                    }
                }
            }
            .right {
                width: 150px;
                height: 50px;
                line-height: 50px;
                text-align: center;
                font-weight: 500;
                color: white;
                background-color: #f1898f;
            }
        }
    }
    .writeArticle{
        input {
            width: 100%;
            height: 30px;
            border: 0px;
        }
        vue-editor.rich-editor {

        }
        div.rich-publish {
            float: right;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 100px;
            font-size: 16px;
            color: white;
            background-color: var(--themeColor);
        }
        &::after{
            content: '';
            display: block;
            clear: both;
        }
    }
}
</style>