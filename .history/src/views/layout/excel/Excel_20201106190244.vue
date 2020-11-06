<template>
<div>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="名称" width="180">
        </el-table-column>
        <el-table-column prop="shop" label="商品编号" width="180">
        </el-table-column>
        <el-table-column prop="price" label="原价">
        </el-table-column>
        <el-table-column prop="cost" label="现价">
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
        getexcel() {
            axios.get('/api/tableData').then((res => {
                this.tableData = res.data.data
                console.log(this.tableData);
            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {
        this.getexcel()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>

</style>
