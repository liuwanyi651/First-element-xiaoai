<template>
<div>
    <el-menu default-active="1" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
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

    </el-menu>
    <el-menu :default-active="this.$router.path" router background-color="#545c64" text-color="#fff">
        <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
            <i class="iconfont" :class="item.iPath"></i>
            {{ item.navItem }}
        </el-menu-item>
    </el-menu>

</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            navList: [{
                    name: '/findProject',
                    navItem: '首页',
                    iPath: 'el-icon-s-home'
                },
                {
                    name: '/communityActivity',
                    navItem: '已发布',
                    iPath: 'el-icon-success'
                },
                {
                    name: '/publishProject',
                    navItem: '统计',
                    iPath: 'el-icon-menu'
                },
                {
                    name: '/personalCenter',
                    navItem: '发表文章',
                    iPath: 'el-icon-s-promotion'
                },
                {
                    name: '/manageCenter',
                    navItem: '标签页',
                    iPath: 'el-icon-s-order'
                },
                {
                    name: '/manageCenter',
                    navItem: '导出excel',
                    iPath: 'el-icon-upload"'
                },
                {
                    name: '/manageCenter',
                    navItem: '图片上传',
                    iPath: 'el-icon-picture'
                },
                {
                    name: '/manageCenter',
                    navItem: '退出系统',
                    iPath: 'el-icon-s-help'
                }

            ]
        }
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
