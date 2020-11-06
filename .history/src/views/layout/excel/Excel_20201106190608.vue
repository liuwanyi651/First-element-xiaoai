<template>
<div>
    <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="CREATE_TIME" label="商品编号" width="300">
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价">
        </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价">
        </el-table-column>
        <el-table-column prop="btn" label="操作">
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
