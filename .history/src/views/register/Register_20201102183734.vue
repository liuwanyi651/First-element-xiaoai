<template>
<div class="bg">
    <div class="box">
        <div class="line">

        </div>
    </div>
</div>
</template>

<script>
// 引入组件
// import register from '../components/register/Register'
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {
        //注册组件
        // register
    },
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    background-image: url(../views/bg.jpg);
    background-size: cover;
    position: absolute;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.line {
    width: 500px;
    height: 300px;
    background: white;
    border: 1px solid #ccc;
}

.login-form {
    margin-top: 40px;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: center;
}
</style>
