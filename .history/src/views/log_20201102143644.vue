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

.line
</style>
