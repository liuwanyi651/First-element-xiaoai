<template>
<div class="all">
    <div class="zhichi">支持拖拽</div>
    <div class="Element">Element UI自带上传组件</div>
    <div class="pc">
        <el-upload class="upload-demo" drag action="/api/upload" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
    <div class="zhichi">支持裁剪</div>
    <div class="Element">Element UI自带上传组件</div>
    <div class="btn">
        <el-button type="primary" @click="toggleShow">上传图片</el-button>
        <my-upload @crop-success="cropSuccess" @crop-upload-success="cropUploadSuccess" @crop-upload-fail="cropUploadFail" v-model="show" :width="200" :height="200" img-format="png" :size="size" langType=‘zh‘ :noRotate="false" field="file" url="/api/upload"></my-upload>
        <img :src="imgDataUrl">
    </div>
</div>
</template>

<script>
import axios from 'axios'
import 'babel-polyfill';
import myUpload from 'vue-image-crop-upload';
// 引用第二种上传方式组件
export default {
    name: '',
    props: {},
    data() {
        return {
            imgDataUrl: "",
            show: false,
            size: 2.1
        }
    },
    components: {
        "my-upload": myUpload
    },
    methods: {
        toggleShow() {
            this.show = !this.show;
        },
        cropSuccess(imgDataUrl, field) {
            console.log("-- -- -- --crop success-- -- -- --", imgDataUrl, field);
        },
        //上传成功回调
        cropUploadSuccess(jsonData, field) {
            console.log("-- -- -- --upload success-- -- -- --");
            this.imgDataUrl = jsonData.files.Avatar1;
            console.log(jsonData);
            console.log("field: " + field);
        },
        //上传失败回调
        cropUploadFail(status, field) {
            console.log("-- -- -- --upload fail-- -- -- --");
            console.log("上传失败状态" + status);
            console.log("field: " + field);
        }
    },
    mounted() {

    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.all {
    height: 100vh;
    background: white;
}

.zhichi {
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
    margin-left: 30px;
    padding: 20px 0;
}

.Element {
    width: 95%;
    background: rgb(231, 233, 236);
    margin-left: 30px;
    padding: 20px 5px;
}

.pc {
    margin-left: 30px;
    margin-top: 20px;
}

.btn {
    margin-left: 30px;
    margin-top: 20px;
}
</style>
