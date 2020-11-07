<template>
<div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题" width="180">
        </el-table-column>
        <el-table-column prop="abstract" label="文章摘要" width="180">
        </el-table-column>
        <el-table-column prop="author" label="作者">
        </el-table-column>
        <el-table-column prop="category" label="类目">
        </el-table-column>
        <el-table-column prop="source" label="来源">
        </el-table-column>
        <el-table-column prop="text" label="文章内容">
        </el-table-column>
        <el-table-column prop="date" label="发布时间">
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
            tableData: []
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
