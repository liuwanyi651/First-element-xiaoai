<template>
<div class="all">
    <div class="head">
        <div class="ic">
            <i class="iconfont icon-yonghu icon" style="color: green;"></i>
        </div>
        <div class="lie">
            <div class="text">New visits</div>
            <div class="tex">5465464646
                <countTo :startVal="startVal" :endVal="count.purchases" :duration="3000"></countTo>
            </div>
        </div>
    </div>
    <div class="mes">
        <div class="ic">
            <i class="iconfont icon-icon-test1 icon" style="color: blue;"></i>
        </div>
        <div class="lie">
            <div class="text">Message</div>
            <div class="tex">5465464646 </div>
        </div>
    </div>
    <div class="money">
        <div class="ic">
            <i class="iconfont icon-renminbi icon" style="color: red;"></i>
        </div>
        <div class="lie">
            <div class="text">Purchases</div>
            <div class="tex">5465464646 </div>
        </div>
    </div>
    <div class="cat">
        <div class="ic">
            <i class="iconfont icon-gouwuche1 icon" style="color:orangered;"></i>
        </div>
        <div class="lie">
            <div class="text">Shopping</div>
            <div class="tex">5465464646 </div>
        </div>
    </div>
</div>
</template>

<script>
import countTo from 'vue-count-to';
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
}

.ic {
    display: flex;
    line-height: 70px;
}

.icon {
    margin-left: 20px;
    font-size: 80px;
}

.text {
    width: 90px;
    text-align: end;
    font-size: 16px;
    padding-left: 60px;
}

.tex {
    margin-top: 20px;
    width: 200px;
    text-align: end;
    font-size: 22px;
}
</style>
