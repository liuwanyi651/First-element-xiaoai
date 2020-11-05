<template>
<div class="bg">
    <div class="box">
        <div class="line"></div>
    </div>
</div>
</template>

<script>
import register from '../components/register/Register'
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
    background-image: url(./bg.jpg);
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
    opacity: 0.7;
    border: 1px solid #ccc;
}
</style>
