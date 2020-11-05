<template>
<div>
    <div class="header">header</div>
    <div class="container">
        <div class="aside">
            <nav-left></nav-left>
        </div>
        <div class="main">
            <router-view></router-view>
        </div>
    </div>
</div>
</template>

<script>
import navLeft from '../../components/navLeft/NavLeft'
export default {
    name: '',
    props: {},
    components: {
        navLeft
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

<style lang="scss" scoped>
.header {
    height: 60px;
    line-height: 60px;
    position: fixed;
    top: 0;
    background: skyblue;
    width: 100%;
    z-index: 99;
}

.container {
    display: flex;
    width: calc(100% - 200px);

    .aside {
        width: 200px;
        position: fixed;
        left: 0;
        bottom: 0;
        top: 60px;
    }

    .main {
        flex: 1;
        position: relative;
        left: 200px;
        top: 60px;
        padding: 20px;
    }
}
</style>
