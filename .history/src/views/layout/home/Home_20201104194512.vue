<template>
<div class="all">
    <Count class="count"></Count>
    <Linechart class="linchart"></Linechart>
    <Mchart class="mchart"></Mchart>
    <Zlist class="zlist"></Zlist>
</div>
</template>

<script>
// 引入组件
import Count from "../../../components/homeCom/Count"
import Linechart from "../../../components/homeCom/Linechart"
import Mchart from "../../../components/homeCom/Mchart"
import Zlist from "../../../components/homeCom/Zlist"
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
        Mchart,
        // 引入最下面一排的组件（todolist 进度条等）
        Zlist
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
    margin-top: 10px;
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
    height: 360px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}

.zlist {
    height: 680px;
    margin-top: 20px;
    display: flex;
    justify-content: space-between;
}
</style>
