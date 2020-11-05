<template>
<div>
    <div class="orderon">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="num" label="Order_No" width="180">
            </el-table-column>
        </el-table>
    </div>
    <div class="todolist">
        <el-table :data="table" style="width: 100%">
            <el-table-column prop="name" label="Order_No" width="180">
            </el-table-column>
            <el-table-column prop="price" label="Price" width="180">
            </el-table-column>
            <el-table-column prop="status" label="status">
            </el-table-column>
        </el-table>
    </div>
    <div class="bar">
        <div class="im">
            <div>
                <img src=" https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
            </div>
            <div class="pro">
                <el-progress :percentage="item.progress*100" v-for="(item,index) in plan" :key="index" style="font-size:30px"></el-progress>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    props: {

    },
    data() {
        return {
            plan: {},
            tableData: [],
            table: []

        }
    },
    components: {},
    methods: {
        getorderon() {
            axios.get('/api/orderData').then((res => {
                this.tableData = res.data.data
                // console.log(this.tableData);
            })).catch((err => {
                console.log(err);
            }))
        },
        getlist() {
            axios.get('/api/todolist').then((res => {
                this.table = res.data.data
                console.log(this.table);
            })).catch((err => {
                console.log(err);
            }))
        },
        getprogress() {
            axios.get('/api/progress ').then((res => {
                this.plan = res.data.data
                // console.log(this.plan);
            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {
        this.getprogress(),
            this.getlist(),
            this.getorderon()
    },
    computed: {

    },
    watch: {}
}
</script>

<style lang="scss" scoped>
.orderon {
    width: 50%;
    background: white;
}

.todolist {
    width: 24.7%;
    background: white;
}

.bar {
    width: 24.7%;
    background: white;

}

.im {
    width: 93%;
    // background: yellowgreen;
    margin: 0 auto;
    padding: 16px 0;
}

img {
    width: 100%;
    height: auto;
}

.pro {
    margin-top: 40px;
}
</style>
