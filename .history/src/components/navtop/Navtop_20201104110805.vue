<template>
<div class="flex">
    <div class="left">
        欢迎来到{{user.username}}后台管理系统！
    </div>
    <div class="right">
        hahhahhahhh
    </div>
</div>
</template>

<script>
import dayjs from 'dayjs'
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
            // console.log(111);
            let userobj = localStorage.getItem("user");
            // console.log(localStorage.getItem("user"));
            // JSON.parse 把字符串转换成对象
            this.user = JSON.parse(userobj)
        }
    },
    mounted() {
        this.getuser()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
}

.left {
    width: 500px;
    justify-content: flex-start;
}

.right {
    width: 400px;
    justify-content: flex-end;
    background: goldenrod;
}
</style>
