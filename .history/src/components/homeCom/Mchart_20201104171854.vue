<template>
<div>
    <div class="tubiao">
        <!--雷达图-->
        <ve-radar :data="chartData"></ve-radar>
    </div>
    <div class="tubiao">
        <!--饼图-->
        <ve-pie :data="piechart"></ve-pie>
    </div>
    <div class="tubiao">
        <!--柱状图-->
        <ve-histogram :data="chartData"></ve-histogram>
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
                columns: [], //键
                rows: [], //键对应的数组
            },
            piechart: {
                columns: [], //键
                rows: [], //键对应的数组
            },
            columnChart: {
                columns: [], //键
                rows: [], //键对应的数组
            }
        }
    },
    components: {},
    methods: {
        // 这是雷达图的方法
        radarmap() {
            axios
                .get("/api/radarChat")
                .then((res) => {
                    let map = res.data.data;
                    // console.log(map);
                    this.chartData.columns = Object.keys(map[0]);
                    // console.log(this.chartData.columns);
                    this.chartData.rows = map
                    // console.log(this.chartData.rows);
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // 这是饼图的方法
        piechan() {
            axios
                .get("/api/ringChat")
                .then((res) => {
                    let pei = res.data.data;
                    this.piechart.columns = Object.keys(pei[0]);
                    this.piechart.rows = pei
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        // 这是柱状图的方法
        histogram() {
            axios.get('/api/homeData').then((res => {

            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {
        // 调用方法
        this.radarmap(),
            this.piechan()
    },
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
.tubiao {
    width: 33.2%;
    background: white;
}
</style>
