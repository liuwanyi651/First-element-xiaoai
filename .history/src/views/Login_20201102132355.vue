<template>
<div class="bg">
    <div class="box">
        <div class="line"></div>
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
    background-image: url("./bg.jpg");
    position: absolute;
    background-size: cover;
    background-repeat: no-repeat;
}

.box {
    display: flex;
    height: 100%;
    justify-content: center;
    align-content: center;
}

.line {
    width: 500px;
    height: 300px;
    border: 1px solid #ccc;
}
</style>
