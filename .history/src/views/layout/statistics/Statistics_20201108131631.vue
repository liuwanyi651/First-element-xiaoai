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
            arr: [],
            chartData: {
                columns: ['分类', '数量'],
                rows: [{
                        '分类': 'vue',
                        '数量': 3
                    },
                    {
                        '分类': 'react',
                        '数量': 2
                    }
                ],

            }
        }
    },
    components: {},
    methods: {
        getData() {
            axios.get('/api/article/allArticle ').then(res => {
                this.arr = res.data.data
                console.log(res.data.data)
            }).catch(err => {
                console.log(err)
            })
        }
    },
    mounted() {
        this.getData()
    },
    computed: {

    },
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
