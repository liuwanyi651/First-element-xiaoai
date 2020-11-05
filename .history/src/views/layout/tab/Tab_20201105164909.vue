<template>
<div class="all">
    <div class="box">
        <div>
            <el-tabs v-model="activeName" @tab-click="handleClick">
                <el-tab-pane label="未读消息" name="first"></el-tab-pane>
                <el-tab-pane label="已读消息" name="second"></el-tab-pane>
                <el-tab-pane label="回收站" name="third"></el-tab-pane>
            </el-tabs>
        </div>
        <div>
            <el -col>
                <el-card>
                    <div v-for="item in list" :key="item.id">
                        <div style="
                height: 80px;
                border-bottom: 1px solid gray;
                line-height: 80px; display: flex;justify-content: space-between;">
                            <div>{{ item.content }}</div>
                            <div style="display: flex;">
                                <div style="margin-right: 20px">{{ item.time }}</div>
                                <div v-if="dataname === 1">
                                    <el-button @click="sign(item)">标记已读</el-button>
                                </div>
                                <div v-if="dataname === 2">
                                    <el-button @click="boxname(item)">删除</el-button>
                                </div>
                                <div v-if="dataname === 3">
                                    <el-button @click="reduction(item)">还原</el-button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="list.length === 0">暂无消息</div>
                    <div v-if="dataname === 1 && list.length !== 0" style="margin-top:20px">
                        <el-button type="primary" @click="allreaded">全部已读</el-button>
                    </div>
                    <div v-if="dataname === 2 && list.length !== 0" style="margin-top:20px">
                        <el-button type="primary" @click="alldel">全部删除</el-button>
                    </div>
                    <div v-if="dataname === 3 && list.length !== 0" style="margin-top:20px">
                        <el-button type="primary" @click="clear">全部清除</el-button>
                    </div>
                </el-card>
            </el>
        </div>

    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: 'first',
            // tableData: [{
            //     id: 1,
            //     content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
            //     time: "2020-04-19 20:00:00",

            // }, {
            //     id: 2,
            //     content: "今晚12点整发大红包,先到先得",
            //     time: "2020-04-19 21:00:00",

            // }, {
            //     id: 3,
            //     content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
            //     time: "2018-04-19 22:00:00",

            // }, {
            //     id: 4,
            //     content: "[系统通知]您的优惠券已经过期",
            //     time: "2018-04-19 23:00:00",

            // }]
        }
    },
    components: {},
    methods: {
        handleClick(tab, event) {
            console.log(tab, event);
        },

    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.all {
    height: 100vh;
    background: rgb(231, 233, 236);
}

.box {
    width: 100%;
    margin: 0 auto;
    background: rgb(247, 243, 243);
    height: 500px;
}

.table {
    height: 200px;
    // justify-content: space-between;
    // background: goldenrod;

}
</style>
