<template>
<div>
    <div class="header">
        <navTop></navTop>
    </div>
    <div class="container">
        <div class="aside">
            <div id="asd">
                <navLeft></navLeft>
            </div>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import navLeft from '../../components/navLeft/Navleft'
import navTop from '../../components/navTop/Navtop'
export default {
    name: '',
    props: {},
    components: {
        // 注册组件
        navLeft,
        navTop
    },
    data() {
        return {

        }
    },
    methods: {

    },
    mounted() {

    },
    watch: {

    },
    computed: {

    }
}
</script>

<style lang="scss">
.header {
    height: 70px;
    line-height: 70px;
    position: fixed;
    top: 0;
    background: rgb(40, 91, 134);
    width: 100%;
    z-index: 99;
    color: white;
}

// 把下面撑满
#asd ul {
    height: 1500px;
    border-right: 0;
}

.container {
    display: flex;
    width: calc(100% - 200px);

    .aside {
        width: 200px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 70px;
    }

    .main {
        flex: 1;
        position: relative;
        left: 200px;
        top: 60px;
        padding: 20px;
        background: rgb(182, 204, 238);
    }
}
</style>
