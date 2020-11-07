<template>
<div class="box">
    <!--el组件列表-->
    <el-table :data="tableData.slice((currentPage-1)*pagesize,currentPage*pagesize)" border style="width: 100%" :style="asd">
        <el-table-column fixed prop="NAME" label="名称" width="300">
        </el-table-column>
        <el-table-column prop="GOODS_SERIAL_NUMBER" label="商品编号" width="300">
        </el-table-column>
        <el-table-column prop="ORI_PRICE" label="原价" width="200">
        </el-table-column>
        <el-table-column prop="PRESENT_PRICE" label="现价" width="220">
        </el-table-column>
        <el-table-column fixed="right" label="操作" width="220">
            <template slot-scope="scope">
                <el-button type="primary" size="small" @click="modifythe(scope.$index,scope.row)"><i class="el-icon-edit">修改</i></el-button>
                <el-button type="danger" size="small" @click="del(scope.$index,scope.row)"><i class="el-icon-delete">删除</i></el-button>
            </template>
        </el-table-column>
    </el-table>
    <!--分页组件-->
    <div class="block">
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[10]" :page-size="pagesize" layout="total, sizes, prev, pager, next, jumper" :total="tableData.length">
        </el-pagination>
    </div>
    <!--导出excel插件-->
    <download-excel class="export-excel-wrapper" :data="tableData" name="filename.xls">
        <el-button type="primary">导出xls</el-button>
        <div class="csv">
            <el-button type="success">导出csv</el-button>
        </div>
    </download-excel>
    <!--el修改组件-->
    <div>
        <el-dialog title="修改栏" :visible.sync="coco">
            <el-form :model="form">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="原价">
                    <el-input v-model="form.oldprice"></el-input>
                </el-form-item>
                <el-form-item label="现价">
                    <el-input v-model="form.price"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="coco=false">取 消</el-button>
                <el-button type="primary" @click="coco = false">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: '',
    props: {},
    data() {
        return {
            coco: false,
            tableData: [],
            asd: {
                zIndex: 1
            },
            currentPage: 1,
            pagesize: 10,
            form: {
                name: "",
                oldprice: "",
                price: "",
            }
        }
    },
    components: {},
    methods: {
        exe() {
            axios.get('/api/tableData').then(res => {
                console.log(res.data)
                this.tableData = res.data.data
            }).catch(err => {
                console.log(err)
            })
        },
        handleSizeChange(val) {
            this.currentPage = 1
            this.pagesize = val
        },
        handleCurrentChange(val) {
            this.currentPage = val
        },
        del(index, row) {
            this.tableData.splice(index, 1)
        },
        modifythe(index, row) {
            this.coco = "true",
                this.form.name = row.NAME,
                this.form.oldprice = row.ORI_PRICE
            this.form.price = row.PRESENT_PRICE
        }

    },
    mounted() {
        this.exe()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.export-excel-wrapper {
    width: 200px;
    display: flex;
    justify-content: space-between;
}
</style>
