<template>
<div>
    <ve-line :data="chartData"></ve-line>
</div>
</template>

<script>
import axios from 'axios'

export default {
    name: '',
    props: {},
    data() {
        return {
            chartData: {
                columns: [],
                rows: [],

            }

        }
    },
    components: {},
    methods: {

        shuju() {
            axios.get('./api/homeChat').then((res) => {

                this.res.data

            }).catch((err) => {

            })

        }

    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
