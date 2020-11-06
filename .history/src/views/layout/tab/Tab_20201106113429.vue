<template>
<div class="all">
    <div class="box">
        {{num}}
        <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane :label="`未读消息(${arr.length})`" name="first" @click="()=>{this.num=1}"></el-tab-pane>
            <el-tab-pane label="已读消息" name="second" @click="()=>{this.num=2}"></el-tab-pane>
            <el-tab-pane label="回收站" name="third" @click="()=>{this.num=3}"></el-tab-pane>
        </el-tabs>
        <div class="table" style="margin-bottom: 100px;" v-if="num === 1">
            <el-table :data="arr" :show-header="false">
                <el-table-column prop="content" width="672">
                </el-table-column>
                <el-table-column prop="time" width="300">
                </el-table-column>
                <el-table-column prop="btn">
                    <template slot-scope="scope">
                        <el-button type="primary" style=" margin-left: 20px;" @click="read(scope.$index, scope.row)">标记已读</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <el-button type="danger" style="margin-top: 20px;">全部删除</el-button>
        </div>
        <div class="table" style="margin-bottom: 100px;" v-if="num === 2">
            <el-table :data="arr1" :show-header="false">
                <el-table-column prop="content" width="672">
                </el-table-column>
                <el-table-column prop="time" width="300">
                </el-table-column>
                <el-table-column prop="btn">
                    <slot>
                        <el-button type="primary" style=" margin-left: 20px;">标记已读</el-button>
                    </slot>
                </el-table-column>
            </el-table>
            <el-button type="danger" style="margin-top: 20px;">全部删除</el-button>
        </div>
        <div class="table" style="margin-bottom: 100px;" v-if="num === 3">
            <el-table :data="arr3" :show-header="false">
                <el-table-column prop="content" width="672">
                </el-table-column>
                <el-table-column prop="time" width="300">
                </el-table-column>
                <el-table-column prop="btn">
                    <slot>
                        <el-button type="primary" style=" margin-left: 20px;">标记已读</el-button>
                    </slot>
                </el-table-column>
            </el-table>
            <el-button type="danger" style="margin-top: 20px;">全部删除</el-button>
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

            }],
            arr1: [],
            arr2: [],
            arr3: [],
            num: 1

        }
    },
    components: {},
    methods: {
        handleClick(tab, event) {
            console.log(event);
        },
        read(index, row) {
            this.arr1.push(this.arr.splice(index, 1)[0])
            console.log(this.arr1);
        }

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
