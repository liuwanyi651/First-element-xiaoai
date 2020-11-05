<template>
<div class="bg">
    <div class="box">
        <div class="line">
            <!-- 登录表单区域 -->
            <el-form :model="loginForm" abel-width="0px" class="login-form">
                <!-- 用户名 -->
                <el-form-item>
                    <!-- 首部图标 -->
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghuming"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item>
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-password" type="password"></el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item>
                    <el-input style="width:220px;" value="验证码"></el-input>
                    <el-input style="width:220px;" v-html="yzm"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary">立即登录</el-button>
                    <el-button type="primary">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: '',
    props: {},
    data() {
        return {
            loginForm: {
                username: '',
                password: ''
            }, //登录表单的数据绑定对象
            yzm: {} //验证码
        }
    },
    components: {},
    methods: {
        getData() {
            axios.get('/api/captcha').then((res => {
                this.yzm = res.data;
            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {
        this.getData()
    },
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    background: rgb(191, 232, 245);
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
}

.line {
    width: 500px;
    height: 300px;
    background: white;
    border: 1px solid #ccc;
}

.login-form {
    margin-top: 40px;
    padding: 0 20px;
    box-sizing: border-box;
}

.btns {
    display: flex;
    justify-content: center;
}
</style>
