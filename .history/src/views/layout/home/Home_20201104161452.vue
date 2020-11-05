<template>
<div class="all">
    <Count class="count"></Count>
    <Linechart class="linchart"></Linechart>
    <Mchart class="mchart"></Mchart>
</div>
</template>

<script>
// 引入组件
import Count from "../../../components/homeCom/Count"
import Linechart from "../../../components/homeCom/Linechart"
import Mchart from "../../../components/homeCom/Mchart"
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
        Linechart,
        // 引入中间三个图形的组件
        Mchart
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
    height: 140px;
    display: flex;
    justify-content: space-between;
}

.linchart {
    margin-top: 20px;
    background: white;
    height: 400px;
}

.mchart {
    height: 300px;
    margin-top: 20px;
    background: white;
}
</style>
