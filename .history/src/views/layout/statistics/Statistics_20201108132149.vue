<template>
<div>
    <div style="width:100%;height:60px;display:flex;">
        <div style="background:#2BD5D5;" class="box-font">今日发布</div>
        <div style="background:#FF8C69;" class="box-font">原创文章</div>
        <div style="background:#668B8B;" class="box-font">新留言</div>
        <div style="background:#00FFFF;" class="box-font">新消息</div>
    </div>
    <div style="display:flex;">
        <div style="width:50%;">
            <ve-pie :data="chartData"></ve-pie>
        </div>
        <div style="width:50%;">
            <ve-pie :data="chart"></ve-pie>
        </div>
    </div>
    <ve-waterfall :data="Data"></ve-waterfall>
</div>
</template>

<script>
import axios from 'axios'
//引入lodash
import groupBy from 'lodash/groupBy'
export default {
    name: '',
    props: {},
    data() {
        return {
            // arr: [],
            // chartData: {
            //     columns: ['分类', '数量'],
            //     rows: [{
            //             '分类': 'vue',
            //             '数量': 3
            //         },
            //         {
            //             '分类': 'react',
            //             '数量': 2
            //         }
            //     ],

            // }
            chartData: {
                columns: ["类目", "数量"],
                rows: []
            },
            chart: {
                columns: ["来源", "数量"],
                rows: []
            },
            Data: {
                columns: ["发布时间", "数量"],
                rows: []
            }
        }
    },
    components: {},
    methods: {
        // getData() {
        //     axios.get('/api/article/allArticle ').then(res => {
        //         this.arr = res.data.data
        //         console.log(res.data.data)
        //     }).catch(err => {
        //         console.log(err)
        //     })
        // }
        getData() {
            axios
                .get("/api/article/allArticle")
                .then(res => {
                    let categoryArr = groupBy(res.data.data, "category");
                    this.arr = res.data.data;
                    for (let i in categoryArr) {
                        let obj = {
                            数量: categoryArr[i].length,
                            类目: i
                        };
                        this.chartData.rows.push(obj);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        yuan() {
            axios
                .get("/api/article/allArticle")
                .then(res => {
                    let sourceArr = groupBy(res.data.data, "source");
                    this.arr = res.data.data;
                    for (let i in sourceArr) {
                        let obj = {
                            数量: sourceArr[i].length,
                            来源: i
                        };
                        this.chart.rows.push(obj);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        },
        time() {
            axios
                .get("/api/article/allArticle")
                .then(res => {
                    let dateArr = groupBy(res.data.data, "date");
                    this.arr = res.data.data;
                    for (let i in dateArr) {
                        let obj = {
                            数量: dateArr[i].length,
                            发布时间: i
                        };
                        this.Data.rows.push(obj);
                    }
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    mounted() {
        this.getData();
        this.yuan();
        this.time();
    },
    computed: {

    },
    watch: {}
}
</script>

<style lang="scss" scoped>
.box-font {
    width: 25%;
    color: white;
    text-align: center;
    line-height: 60px;
}
</style>
