<template>
<div>
    <el-table :data="tableData1" stripe style="width: 100%">
        <el-table-column prop="NAME" label="名称" width="350"> </el-table-column>
        <el-table-column prop="CREATE_TIME" label="商品编号" width="300">
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价"> </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价"> </el-table-column>
        <el-table-column prop="btn" label="操作">
            <el-button type="primary">修改</el-button>
            <el-button type="danger">删除</el-button>
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10,20,30,40,50]" :page-ize="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
    </div>
    <!--分页表格-->
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "",
    props: {},
    data() {
        return {
            tableData: [],
            currentPage: 1,
            // current-page	当前页数，支持 .sync 修饰符
            //当前页数为1
            //每页显示10条
            pageSize: 10,
            tableData1: []
        };
    },
    components: {},
    methods: {
        getexcel() {
            axios
                .get("/api/tableData")
                .then((res) => {
                    this.tableData = res.data.data;
                    this.tableData1 = this.tableData.splice(0, 10)
                    // console.log(this.tableData);
                })
                .catch((err) => {
                    console.log(err);
                });

        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
            this.currentPage = 1;
            this.pageSize = val;
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
            this.currentPage = val;
        },
    },
    mounted() {
        this.getexcel();
    },
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
</style>
