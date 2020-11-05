<template>
<div class="all">
    <div class="head">
        <div class="ic">
            <i class="iconfont icon-yonghu icon" style="color: green;"></i>
            <div class="mb">New visits</div>
        </div>
    </div>
    <div class="mes">
        <div class="ic">
            <i class="iconfont icon-icon-test1 icon" style="color: blue;"></i>
        </div>
    </div>
    <div class="money">
        <div class="ic">
            <i class="iconfont icon-renminbi icon" style="color: red;"></i>
        </div>
    </div>
    <div class="cat">
        <div class="ic">
            <i class="iconfont icon-gouwuche1 icon" style="color:orangered;"></i>
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
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss">
.head,
.mes,
.money,
.cat {
    width: 326px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

.ic {
    display: flex;
    background: orchid;
    line-height: 70px;
}

.icon {
    font-size: 50px;
}

.text {
    display: flex;
}
</style>
