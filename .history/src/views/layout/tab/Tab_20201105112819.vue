<template>
<div class="all">
    <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="未读消息" name="first"></el-tab-pane>
            <el-tab-pane label="已读消息" name="second"></el-tab-pane>
            <el-tab-pane label="回收站" name="third"></el-tab-pane>
        </el-tabs>
        <div class="table">
            <el-table :data="tableData">
                <el-table-column prop="date" width="180">
                </el-table-column>
                <el-table-column prop="name" width="180">
                </el-table-column>
                <el-table-column prop="address">
                </el-table-column>
            </el-table>
        </div>
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
        },
        tableData: [{
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
        }, {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
        }, {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
        }, {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
        }]
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
    // background: rgb(194, 135, 135);
    height: 500px;
}

.table {
    height: 200px;
    // background: goldenrod;
}
</style>
