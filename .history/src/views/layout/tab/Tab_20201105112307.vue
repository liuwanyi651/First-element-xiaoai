<template>
<div class="all">
    <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未读消息" name="first"></el-tab-pane>
            <el-tab-pane label="已读消息" name="second"></el-tab-pane>
            <el-tab-pane label="回收站" name="third"></el-tab-pane>
        </el-tabs>
    </div>
    <div class="table">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="日期" width="180">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="180">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
        </el-table>
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
    background: rgb(194, 135, 135);
    height: 500px;
}

.table {
    height: 200px;
    background: goldenrod;
}
</style>
