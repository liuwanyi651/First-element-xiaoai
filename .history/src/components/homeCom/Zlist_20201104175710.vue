<template>
<div>
    <div class="orderon"></div>
    <div class="todolist"></div>
    <div class="bar">
        <div class="im">
            <div>
                <img src=" https://wpimg.wallstcn.com/e7d23d71-cf19-4b90-a1cc-f56af8c0903d.png" alt="">
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
        return {}
    },
    components: {},
    methods: {},
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
    width: 90%;
    background: yellowgreen;
    margin: 0 auto;
    padding-top: 20px;
}

img {
    width: 100%;
    height: auto;
}
</style>
