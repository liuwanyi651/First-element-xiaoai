<template>
<div class="all">
    <div class="box">
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="`未读消息(${arr.length})`" name="first"></el-tab-pane>
            <el-tab-pane label="已读消息" name="second"></el-tab-pane>
            <el-tab-pane label="回收站" name="third"></el-tab-pane>
        </el-tabs>
        <div class="w-p0">
            <el-card class="box-card" width="90%">
                <div v-if="num === 1">
                    <div v-for="(item, index) in arr1" :key="item.id" class="text item d-f j-b">
                        <div>
                            {{ item.content }}
                        </div>
                        <div>
                            {{ item.time }}
                            <el-button @click="alredy(item, index)">标记为已读</el-button>
                        </div>
                    </div>
                    <div>{{ arr1.length > 0 ? "" : "暂无数据" }}</div>
                    <el-button @click="allalredy" v-if="arr1.length > 0">全部已读</el-button>
                </div>

                <div v-if="num === 2">
                    <div v-for="(item, index) in arr2" :key="item.id" class="text item d-f j-b">
                        <div>
                            {{ item.content }}
                        </div>
                        <div>
                            {{ item.time }}
                            <el-button @click="remove(item, index)">移入回收站</el-button>
                        </div>
                    </div>
                    <div>{{ arr2.length > 0 ? "" : "暂无数据" }}</div>
                    <el-button @click="allremove" v-if="arr2.length > 0">全部放入回收站</el-button>
                </div>

                <div v-if="num === 3">
                    <div v-for="(item, index) in arr3" :key="item.id" class="text item d-f j-b">
                        <div>
                            {{ item.content }}
                        </div>
                        <div>
                            {{ item.time }}
                            <el-button @click="recycle(item, index)">恢复</el-button>
                        </div>
                    </div>
                    <div>{{ arr3.length > 0 ? "" : "暂无数据" }}</div>
                    <el-button @click="allclear" v-if="arr3.length > 0">全部删除</el-button>
                </div>
            </el-card>
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
            arr: [{
                id: 1,
                content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
                time: "2020-04-19 20:00:00",

            }, {
                id: 2,
                content: "今晚12点整发大红包,先到先得",
                time: "2020-04-19 21:00:00",

            }, {
                id: 3,
                content: "[系统通知]该系统将于今晚凌晨2点到5点进行升级维护",
                time: "2018-04-19 22:00:00",

            }, {
                id: 4,
                content: "[系统通知]您的优惠券已经过期",
                time: "2018-04-19 23:00:00",

            }]
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
    // background: rgb(194, 135, 135);
    height: 500px;

}

.table {
    height: 200px;
    // background: goldenrod;

}
</style>
