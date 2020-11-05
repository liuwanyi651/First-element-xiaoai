<template>
<div>
    <ve-line :data="chartData"></ve-line>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    props: {},
    data() {
        return {
            chartData: {
                columns: [],
                rows: [],
            },
        }
    },
    components: {},
    methods: {
        // 折线图
        linechart() {
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
        // 调用折线图
        this.linechart();
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
