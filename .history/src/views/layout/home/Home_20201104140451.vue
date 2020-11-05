<template>
<div class="all">
    <Linechart></Linechart>
</div>
</template>

<script>
import Linechart from "../../../components/homeCom/Linechart"
export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    components: {
        // 注册折线图组件
        Linechart
    },
    methods: {

    },
    mounted() {},
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
