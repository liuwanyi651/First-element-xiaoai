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

        }
    },
    components: {},
    methods: {
        getprogress() {
            axios.get('/api/progress ').then((res => {

            })).catch((err => {
                console.log(err);
            }))
        }
    },
    mounted() {},
    computed: {},
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
