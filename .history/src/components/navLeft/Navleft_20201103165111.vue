<template>
<div>
    <el-row class="tac">
        <el-col :span="12">
            <h5>默认颜色</h5>
            <el-menu default-active="2" class="el-menu-vertical-demo">
                <el-submenu index="1">
                    <template slot="title">
                        <i class="el-icon-location"></i>
                        <span>导航一</span>
                    </template>
                </el-submenu>
            </el-menu>
        </el-col>
    </el-row>
</div>
</template>

<script>
export default {
    name: '',
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
