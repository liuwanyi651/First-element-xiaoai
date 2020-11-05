<template>
<div>
    <div class="orderon"></div>
    <div class="todolist"></div>
    <div class="bar">
        <div class="im">
            <div>
                <img src=" https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
            </div>
            <div class="pro">
                <el-progress :percentage="70" style="font-size:30px"></el-progress>
                <el-progress :percentage="100" status="success" style="font-size:30px"></el-progress>
                <el-progress :percentage="54" style="font-size:30px"></el-progress>
                <el-progress :percentage="70" style="font-size:30px"></el-progress>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: '',
    props: {

    },
    data() {
        return {

        }
    },
    components: {},
    methods: {
        getprogress() {
            axios.get('/api/progress ').then((res => {
                let progress = res.data.data
                console.log(progress);
            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {
        this.getprogress()
    },
    computed: {

    },
    watch: {}
}
</script>

<style lang="scss" scoped>
.orderon {
    width: 50%;
    background: white;
}

.todolist {
    width: 24.7%;
    background: white;
}

.bar {
    width: 24.7%;
    background: white;

}

.im {
    width: 93%;
    // background: yellowgreen;
    margin: 0 auto;
    padding: 16px 0;
}

img {
    width: 100%;
    height: auto;
}

.pro {
    margin-top: 20px;
}
</style>
