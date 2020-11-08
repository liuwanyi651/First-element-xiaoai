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
                    <el-button type="primary" @click="tzzhuce">立即登录</el-button>
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
            if (value.length > 11) {
                callback(new Error("密码不能超过11位"));
            } else {
                callback();
            }
        };
        let validatePass2 = (rule, value, callback) => {
            if (value != this.loginForm.password) {
                callback(new Error("密码不相同"));
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
        };
    },
    components: {},
    methods: {
        //点击注册按钮
        zhuce() {
            this.$refs.formName.validate((valid) => {
                if (valid) {
                    axios
                        .post("/api/user/register", {
                            username: this.loginForm.username,
                            password: this.loginForm.password,
                        })
                        .then((res) => {
                            if (res.data.code === 200) {
                                this.$message.success(res.data.message)
                                this.$router.push("/Login")

                            } else if (res.data.code === 1) {
                                this.$message.warning(res.data.message)
                                this.loginForm.username = ""
                                this.loginForm.password = ""
                                this.loginForm.checkPass = ""
                            }
                            console.log(res.data)

                        })
                        .catch((err) => {
                            console.log(err)
                        });
                } else {
                    console.log("验证错误！！！")
                    return false;
                }
            })
        },
        // 点击登录跳转在注册
        tzzhuce() {
            this.$router.push('/login')
        }
    },
    mounted() {

    },
    computed: {},
    watch: {},
    // 进入到当前的的路由
    // beforeRouteEnter(to, from, next) {
    //     console.log(to);
    //     console.log(form);
    //     next()
    // }
};
</script>

<style lang="scss" scoped>
.bg {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    // background: rgb(191, 232, 245);
    background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAE5AfQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDkqKKK8k/RAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKVVZ2CopZmOAAMkmgQlFbUHhDxFc48vRrznu0RX+eK0ofht4pmGTp6xj/ppMg/kapQk9kYSxVCPxTX3o5OinyxPBM8Ui7XRirD0I4NTWFhdapfRWdnEZbiU4RAQM8Z7+wqbGzkkuZvQrUVvXHgvxJbZ8zR7o47xrv/8AQc1lT6dfWv8Ax8WVxD/10iZf5im4tboiNanP4ZJ/MrUUUUjUKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKvaLP9m13T5+0dzG5/Bgao0qsVYMOoORQtyZLmi0e23DXp1Atca5btFbzFpIFnZCEUykhtoOTt2+n3SO2a1dI1jT7CCKxa7lnmecoJJFYFss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AUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAf/2Q==);
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
