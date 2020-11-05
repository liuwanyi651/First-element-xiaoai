<template>
<div>
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
