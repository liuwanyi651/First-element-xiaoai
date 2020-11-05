<template>
<div>
    <div class="tubiao">
        <!--雷达图-->
        <ve-radar :data="chartData"></ve-radar>
    </div>
    <div class="tubiao">
        <!--饼图-->
        <ve-pie :data="chartData"></ve-pie>
    </div>
    <!--柱状图-->
    <div class="tubiao"></div>
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
        };
    },
    components: {},
    methods: {
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
    },
    mounted() {
        this.radarmap()
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
