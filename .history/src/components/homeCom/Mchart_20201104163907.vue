<template>
<div>
    <div class="tubiao">
        <ve-radar :data="chartData"></ve-radar>
    </div>
    <div class="tubiao"></div>
    <div class="tubiao"></div>
</div>
</template>

<script>
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
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.tubiao {
    width: 33.2%;
    background: white;
}
</style>
