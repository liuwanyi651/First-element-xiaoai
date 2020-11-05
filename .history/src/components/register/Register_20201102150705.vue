<template>
<div> halou
    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="活动名称">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
    </el-form>
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

<style lang="scss" scoped>

</style>
