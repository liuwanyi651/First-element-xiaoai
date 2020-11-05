<template>
<div class="flex">
    <div class="left">
        欢迎来到{{user.username}}后台管理系统！
    </div>
    <div class="right">
        <div>{{hi}}</div>
        <div>{{timer}}现在登录时间是{{time}}</div>
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
            },
            hi: '',
            timer: '',
            time: '',
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
        },
        getTime() {

        }
    },
    mounted() {
        this.getuser()
        this.getTime()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.flex {
    display: flex;
    justify-content: space-between;
}

.left {
    width: 300px;
    // background: greenyellow;
}

.right {
    width: 500px;
    // background: goldenrod;
    display: flex;
}
</style>
