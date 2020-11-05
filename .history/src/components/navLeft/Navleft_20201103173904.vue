<template>
<div>
    <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" class="menu">
        <el-menu-item index="1">
            <i class="el-icon-s-home"></i>
            <span slot="title">首页</span>
        </el-menu-item>
        <el-menu-item index="2">
            <i class="el-icon-success"></i>
            <span slot="title">已发布</span>
        </el-menu-item>
        <el-menu-item index="3">
            <i class="el-icon-menu"></i>
            <span slot="title">统计</span>
        </el-menu-item>
        <el-menu-item index="4">
            <i class="el-icon-s-promotion"></i>
            <span slot="title">发表文章</span>
        </el-menu-item>
        <el-menu-item index="5">
            <i class="el-icon-s-order"></i>
            <span slot="title">标签页 </span>
        </el-menu-item>
        <el-menu-item index="6">
            <i class="el-icon-upload"></i>
            <span slot="title">导出excel</span>
        </el-menu-item>
        <el-menu-item index="7">
            <i class="el-icon-picture"></i>
            <span slot="title">图片上传</span>
        </el-menu-item>
        <el-menu-item index="8">
            <i class="el-icon-s-help"></i>
            <span slot="title">退出系统</span>
        </el-menu-item>
    </el-menu>

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

<style lang="scss">
.menu {
    height: 100%;
}
</style>
