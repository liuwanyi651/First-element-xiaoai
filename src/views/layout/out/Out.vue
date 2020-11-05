<template>
<div>
    <div class="top">
        <div class="content">考虑考虑再离开吧~</div>
        <div class="el">
            <el-button type="primary" @click="exit">确认退出</el-button>
        </div>
    </div>
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
    methods: {
        exit() {
            this.$router.push("/register")
            localStorage.clear()
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.top {
    width: 1200px;
    height: 615px;
}

.content {
    width: 1200px;
    height: 300px;
    line-height: 550px;
    text-align: center;
    font-size: 30px;
}

.el {
    margin-top: 20px;
    width: 1200px;
    display: flex;
    justify-content: center;
}
</style>
