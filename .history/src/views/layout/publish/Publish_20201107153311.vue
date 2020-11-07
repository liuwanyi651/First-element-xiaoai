<template>
<div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="date" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="name" label="作者" width="180">
        </el-table-column>
        <el-table-column prop="address" label="类目">
        </el-table-column>
        <el-table-column prop="address" label="来源">
        </el-table-column>
        <el-table-column prop="address" label="重要性">
        </el-table-column>
        <el-table-column prop="address" label="发布时间">
        </el-table-column>
        <el-table-column prop="address" label="操作">
        </el-table-column>
    </el-table>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
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
        }
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
