<template>
<div class="all">

    <Linechart>hahah</Linechart>
</div>
</template>

<script>
// import axios from "axios";
import Linechart from "../../../components/homeCom/Linechart"
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
    components: {
        Linechart
    },
    methods: {
        // shuju() {
        //     axios.get('/api/homeChat').then((res) => {

        //         // console.log(res.data.data);
        //         this.chartData.rows = res.data.data
        //         for (let k in (res.data.data)[0]) {
        //             this.chartData.columns.push(k)

        //         }
        //         // console.log(this.chartData.columns);
        //     })
        // },
    },
    mounted() {
        // this.shuju();
    },
    computed: {},
    watch: {},
};
</script>

<style lang="scss" scoped>
.all {
    width: 100%;
    height: 100%;
    background: rgb(231, 233, 236);
}
</style>
