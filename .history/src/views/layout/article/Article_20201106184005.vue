<template>
<div>
    <!--头部-->
    <div class="top">
        <div class="look">
            <el-button type="success" class="ml" @click="see">查看</el-button>
            <el-button type="primary" class="mr" @click="release">发布</el-button>
        </div>
    </div>
    <!--文章标题 及 文章摘要-->
    <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="title">
                <el-input v-model="ruleForm.title"></el-input>
            </el-form-item>
            <el-form-item label="文章摘要" prop="digest">
                <el-input v-model="ruleForm.digest"></el-input>
            </el-form-item>
            <div class="box">
                <div>
                    <el-form-item label="作者" prop="author">
                        <el-input v-model="ruleForm.author"></el-input>
                    </el-form-item>
                </div>
                <!--类目-->
                <div>
                    <el-form-item label="类目" prop="category">
                        <el-select v-model="ruleForm.category" placeholder="请选择">
                            <el-option label="Vue" value="Vue"></el-option>
                            <el-option label="React" value="React"></el-option>
                            <el-option label="Node.js" value="Node.js"></el-option>
                            <el-option label="性能优化" value="性能优化"></el-option>
                            <el-option label="JavaScript" value="JavaScript"></el-option>
                            <el-option label="小程序" value="小程序"></el-option>
                            <el-option label="工具类" value="工具类"></el-option>
                            <el-option label="其他" value="其他"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!--来源-->
                <div>
                    <el-form-item label="来源" prop="source">
                        <el-select v-model="ruleForm.source" placeholder="请选择">
                            <el-option label="原创" value="原创"></el-option>
                            <el-option label="转载" value="转载"></el-option>
                            <el-option label="与他人合作" value="与他人合作"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!--重要性-->
                <div>
                    <el-form-item label="重要性" prop="star">
                        <el-select v-model="ruleForm.star" placeholder="请选择">
                            <el-option label="1" value="1"></el-option>
                            <el-option label="2" value="2"></el-option>
                            <el-option label="3" value="3"></el-option>
                            <el-option label="4" value="4"></el-option>
                            <el-option label="5" value="5"></el-option>
                        </el-select>
                    </el-form-item>
                </div>
                <!--时间-->
                <el-form-item label="发表时间" prop="date">
                    <div class="block">
                        <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期时间" align="right" :picker-options="pickerOptions"></el-date-picker>
                    </div>
                </el-form-item>
            </div>
        </el-form>
    </div>
    <div id="main">
        <mavon-editor v-model="value" />
    </div>
    <div class="btn">
        <el-button type="primary" @click="release">发布</el-button>
    </div>
</div>
</template>

<script>
import axios from "axios";
import dayjs from "dayjs";
export default {
    name: '',
    props: {},
    data() {
        return {
            value: '',
            ruleForm: {
                title: '',
                digest: '',
                author: '',
                category: '',
                source: '',
                star: '',
                date: '',

            },
            rules: {
                title: [{
                    required: true,
                    message: '请输入标题',
                    trigger: 'blur'
                }],
                digest: [{
                    required: true,
                    message: '请输入文章摘要',
                    trigger: 'blur'
                }],
                author: [{
                    required: true,
                    message: '请输入作者名称',
                    trigger: 'blur'
                }],
                category: [{
                    required: true,
                    message: '不能为空',
                    trigger: 'blur'
                }],
                source: [{
                    required: true,
                    message: '不能为空',
                    trigger: 'blur'
                }],
                star: [{
                    required: true,
                    message: '不能为空',
                    trigger: 'blur'
                }],
                date: [{
                    required: true,
                    message: '不能为空',
                    trigger: 'blur'
                }]
            },
            pickerOptions: {
                shortcuts: [{
                        text: "今天",
                        onClick(picker) {
                            picker.$emit("pick", new Date());
                        },
                    },
                    {
                        text: "昨天",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24);
                            picker.$emit("pick", date);
                        },
                    },
                    {
                        text: "一周前",
                        onClick(picker) {
                            const date = new Date();
                            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
                            picker.$emit("pick", date);
                        },
                    },
                ],
            },

        }
    },
    components: {},
    methods: {
        submitForm(formName) {
            this.$refs[formName].validate((valid) => {
                if (valid) {
                    alert('submit!');
                } else {
                    console.log('error submit!!');
                    return false;
                }
            });
        },
        resetForm(formName) {
            this.$refs[formName].resetFields();
        }
    },
    mounted() {},
    computed: {},
    watch: {}
}
</script>

<style lang="scss" scoped>
.top {
    width: 1357px;
    height: 40px;
    background: rgb(13, 134, 13);
    position: relative;

}

.look {
    right: 90px;
}

.form {
    margin-top: 20px;
}

.witer {
    display: flex;

}

.box {
    display: flex;
    justify-content: space-between;
}

.btn {
    margin: 30px auto;
}
</style>
