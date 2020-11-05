<template>
<div class="bg">
    <div class="box">
        <div class="line">
            <register>
                <!-- 登录表单区域 -->
                <el-form label-width="0px" class="login-form">
                    <!-- 用户名 -->
                    <el-form-item>
                        <!-- 首部图标 -->
                        <el-input prefix-icon="iconfont icon-yonghuming"></el-input>
                    </el-form-item>
                    <!-- 密码 -->
                    <el-form-item>
                        <el-input prefix-icon="iconfont icon-password" placeholder=""></el-input>
                    </el-form-item>
                    <!-- 验证码 -->
                    <el-form-item>
                        <el-input style="width:220px;" value="验证码"></el-input>
                    </el-form-item>
                    <!-- 按钮区域 -->
                    <el-form-item class="btns">
                        <el-button type="primary">立即登录</el-button>
                        <el-button type="primary">立即注册</el-button>
                    </el-form-item>
                </el-form>
            </register>
        </div>
    </div>
</div>
</template>

<script>
// 引入组件
import register from '../components/register/Register'
export default {
    name: '',
    props: {},
    data() {
        return {}
    },
    components: {
        //注册组件
        register
    },
    methods: {},
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    background-image: url(../views/bg.jpg);
    background-size: cover;
    position: absolute;
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
