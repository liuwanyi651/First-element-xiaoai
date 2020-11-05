<template>
<div>
    欢迎来到小爱后台管理系统！
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
            console.log(111);
            let userobj = localStorage.getItem("user");
            console.log(localStorage.getItem("user"));

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
