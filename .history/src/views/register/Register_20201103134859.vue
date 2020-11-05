<template>
<div class="bg">
    <div class="box">
        <div class="line">
            <!-- 登录表单区域 -->
            <el-form :model="loginForm" :rules="rules" label-width="0px" class="login-form" ref="formName">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <!-- 首部图标 -->
                    <el-input v-model="loginForm.username" prefix-icon="iconfont icon-yonghuming" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input v-model="loginForm.password" prefix-icon="iconfont icon-password" placeholder="请输入密码"></el-input>
                </el-form-item>
                <!-- 确认密码 -->
                <el-form-item prop="checkPass">
                    <el-input v-model="loginForm.checkPass" prefix-icon="iconfont icon-password" type="password" placeholder="请再次输入密码"></el-input>
                </el-form-item>
                <!-- 按钮区域 -->
                <el-form-item class="btns">
                    <el-button type="primary">立即登录</el-button>
                    <el-button type="primary" @click="zhuce">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "",
    props: {},
    data() {
        let validatePass = (rule, value, callback) => {
            if (value.length > 5) {
                callback(new Error("chuai65"));
            } else {
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value != this.loginForm.password) {
                callback(new Error("cassdasd"));
            } else {
                callback();
            }
        };
        return {
            //登录表单的数据绑定对象
            loginForm: {
                username: "",
                password: "",
                checkPass: "",
                yz: "",
            },
            rules: {
                username: [{
                        required: true,
                        message: "用户名不能为空",
                        trigger: "blur",
                    },
                    {
                        min: 2,
                        max: 8,
                        message: "用户名在2-8位之间",
                        trigger: "blur",
                    },
                ],
                password: [{
                        validator: validatePass,
                        trigger: "blur",
                    },
                    {
                        required: true,
                        message: "密码不能为空",
                        trigger: "blur",
                    },
                    {
                        min: 0,
                        max: 15,
                        message: "密码在6~15位",
                        trigger: "blur",
                    },
                ],
                checkPass: [{
                        required: true,
                        message: "两次输入密码不一致",
                        trigger: "blur",
                    },
                    {
                        validator: validatePass2,
                        trigger: "blur",
                    }
                ]
            },
            yzm: {}, //验证码
        };
    },
    components: {},
    methods: {
        //点击注册按钮
        zhuce() {
            this.$refs.formName.validate((valid) => {
                if (valid) {
                    axios
                        .post("api/", {
                            username: this.loginForm.username,
                            password: this.loginForm.password,
                        })
                        .then((res) => {
                            console.log(res);
                        })
                        .catch();
                } else {
                    console.log("error submit!!");
                    return false;
                }
            });
        },
    },
    mounted() {

    },
    computed: {},
    watch: {},
};
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
