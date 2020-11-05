<template>
<div>
    <el-button type='success' @click="message">按钮</el-button>
    <!--.sync的意思是子组件可以直接修改父组件的值-->
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :show-close='false'>
        <span>你好，信息有误</span>
        <span slot="footer" class="dialog-footer">
            <el-button @click="dialogVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
        </span>
    </el-dialog>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            dialogVisible: false
        }
    },
    components: {},
    methods: {
        message() {
            // this.$message.success('登录成功')
            // this.$message.error('错误')
            this.dialogVisible = true
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
