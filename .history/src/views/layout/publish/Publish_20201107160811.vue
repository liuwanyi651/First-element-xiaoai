<template>
<div>
    <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="title" label="标题">
        </el-table-column>
        <el-table-column prop="author" label="作者">
        </el-table-column>
        <el-table-column prop="category" label="类目">
        </el-table-column>
        <el-table-column prop="source" label="来源">
        </el-table-column>
        <el-table-column prop="star" label="重要性">
        </el-table-column>
        <el-table-column prop="date" label="发布时间">
        </el-table-column>
        <el-table-column prop="" label="操作" width="300">
            <el-button type="primary">修改</el-button>
            <el-button type="danger">删除</el-button>
            <el-button type="success">编辑</el-button>
        </el-table-column>
    </el-table>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    props: {},
    data() {
        return {
            tableData: []
        }
    },
    components: {},
    methods: {
        already() {
            axios.get('/api/article/allArticle ').then(res => {
                console.log(res.data)
                this.tableData = res.data.data
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.already()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
