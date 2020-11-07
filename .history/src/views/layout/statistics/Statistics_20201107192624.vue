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
        return {}
    },
    components: {},
    methods: {
        getData() {
            axios.get('/api/article/allArticle ').then(res => {
                console.log(res.data.data)
                // this.tableData = res.data.data
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
