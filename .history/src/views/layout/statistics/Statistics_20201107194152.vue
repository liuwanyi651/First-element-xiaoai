<template>
<div>这是统计页面
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
                columns: ['日期', '访问用户'],
                rows: [{
                        '日期': '1/1',
                        '访问用户': 1393
                    },
                    {
                        '日期': '1/2',
                        '访问用户': 3530
                    },
                    {
                        '日期': '1/3',
                        '访问用户': 2923
                    },
                    {
                        '日期': '1/4',
                        '访问用户': 1723
                    },
                    {
                        '日期': '1/5',
                        '访问用户': 3792
                    },
                    {
                        '日期': '1/6',
                        '访问用户': 4593
                    }
                ]
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
