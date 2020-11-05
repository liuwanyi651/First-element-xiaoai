<template>
<div class="all">
    <Linechart></Linechart>
</div>
</template>

<script>
// 引入组件
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
    background: white;
}
</style>
