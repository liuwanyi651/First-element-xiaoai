<template>
<div>
    <!--头部-->
    <div class="top"></div>
    <!--文章标题 及 文章摘要-->
    <div class="form">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
            <el-form-item label="文章标题" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
        </el-form>
    </div>
    <!--作者及类目部分-->
    <div class="witer">
        <!--作者-->
        <div>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="作者" prop="name">
                    <el-input v-model="ruleForm.name"></el-input>
                </el-form-item>
            </el-form>
        </div>
        <!--类名-->
        <div>
            <el-select v-model="ruleForm.category" clearable placeholder="请选择科目">
                <el-option v-for="item in option" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!--来源-->
        <div>
            <el-select v-model="ruleForm.source" clearable placeholder="请选择来源">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                </el-option>
            </el-select>
        </div>
        <!--重要性 评分-->
        <div>
            <div class="block">
                <span class="demonstration">重要性</span>
                <el-rate v-model="ruleForm.star" :colors="colors">
                </el-rate>
            </div>
        </div>
        <!--时间部分-->
        <div>
            <div class="block">
                <span class="demonstration">时间</span>
                <el-date-picker v-model="ruleForm.date" type="date" placeholder="选择日期">
                </el-date-picker>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: '',
    props: {},
    data() {
        return {
            ruleForm: {
                name: '',
                region: ''

            },
            rules: {
                name: [{
                    required: true,
                    message: '请输入文章标题',
                    trigger: 'blur'
                }],
                region: [{
                    required: true,
                    message: '请输入文章摘要',
                    // trigger: 'change'
                }],
            }
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
}

.form {
    margin-top: 20px;
}

.witer {
    display: flex;
}
</style>
