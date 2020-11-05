<template>
<div>
    <div style="color:red;">我是头部</div>
    <div>
        <router-view></router-view>
    </div>
    <div style="color:blue;">我是底部</div>
</div>
</template>

<script>
export default {
    name: 'Layout',
    props: {},
    data() {
        return {}
    },
    components: {},
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
