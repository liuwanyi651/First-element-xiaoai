<template>
<div class="all">
    <Count class="count"></Count>
    <Linechart class="linchart"></Linechart>
</div>
</template>

<script>
// 引入组件
import Count from "../../../components/homeCom/Count"
import Linechart from "../../../components/homeCom/Linechart"
export default {
    name: "",
    props: {},
    data() {
        return {};
    },
    components: {
        // 注册头部计数器组件
        Count,
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
}

.count {
    background: yellowgreen;
    height: 200px;
}

.linchart {
    background: hotpink;
    height: 500px;
}
</style>
