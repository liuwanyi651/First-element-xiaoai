<template>
<div class="all">
    <div class="zhichi">支持拖拽</div>
    <div class="Element">Element UI自带上传组件</div>
    <div>
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
    <div class="zhichi">支持裁剪</div>
    <div class="Element">Element UI自带上传组件</div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
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
</style>
