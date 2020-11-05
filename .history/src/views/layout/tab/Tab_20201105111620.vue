<template>
<div class="all">
    <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未读消息" name="first">未读消息</el-tab-pane>
            <el-tab-pane label="已读消息" name="second">已读消息</el-tab-pane>
            <el-tab-pane label="回收站" name="third">回收站</el-tab-pane>
        </el-tabs>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: 'first'
        }
    },
    components: {},
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.all {
    height: 100vh;
    background: rgb(231, 233, 236);
}

.box {
    width: 100%;
    margin: 0 auto;
    background: white;
    height: 500px;
}
</style>
