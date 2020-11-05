<template>
<div>
    <div>
        <el-menu :default-active="this.$router.path" router background-color="#545c64" text-color="#fff">
            <el-menu-item v-for="(item,i) in navList" :key="i" :index="item.name">
                <i class="iconfont" :class="item.iPath"></i>
                {{ item.navItem }}
            </el-menu-item>
        </el-menu>
    </div>
    <div>
        <ve-line :data="chartData"></ve-line>
    </div>
</div>
</template>

<script>
import axios from "axios";

export default {
    name: "",
    props: {},
    data() {
        return {
            chartData: {
                columns: [],
                rows: [],
            },
        };
    },
    components: {},
    methods: {
        shuju() {
            axios.get('/api/homeChat').then((res) => {

                // console.log(res.data.data);
                this.chartData.rows = res.data.data
                for (let k in (res.data.data)[0]) {
                    this.chartData.columns.push(k)

                }
                // console.log(this.chartData.columns);
            })
        },
    },
    mounted() {
        this.shuju();
    },
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
</style>
