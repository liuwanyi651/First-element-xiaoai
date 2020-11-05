<template>
<div>
    欢迎{{user.username}}来到小爱后台管理系统！
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            user: {
                username: ''
            }
        }
    },
    components: {},
    methods: {
        getuser() {
            // localStorage.getItem 是获取存储的字符串
            let userobj = localStorage.getItem("user");
            // JSON.parse 把字符串转换成对象
            this.user = JSON.parse(userobj)
            console.log(this.user);
        }
    },
    mounted() {
        this.getuser()
    },
    computed: {},
    watch: {}
}
</script>

<style lang='scss' scoped>

</style>
