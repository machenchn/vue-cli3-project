<template>
    <div class="demo">
        <p v-text="text1"></p>
        <p>{{text1}}</p>
        <p>{{text2}}</p>
        <p v-html="text2"></p>
        <p v-if="showtext3">{{text3}} : {{showtext3}}</p>
        <p v-else>{{text3}} : {{showtext3}}</p>
        <p v-show="showtext3">{{text3}} : {{showtext3}}</p>
        <p v-show="!showtext3">{{text3}} : {{showtext3}}</p>
        <p v-for="(item, key) in array1" :key="key">{{key}} : {{item.text}}</p>
        <!--
        <p v-for="(item, key) in obj1">{{key}} : {{item}}</p>
        <p v-for="(item, key) in text1">{{key}} : {{item}}</p>
        -->
        <p @click="changeText1">修改text1</p>
        <input v-model="text1">
    </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "demo",
        data() {
            return {
                text1: "数据绑定语法",
                text2: "<span style='color:red'>数据绑定语法</span>",
                showtext3: true,
                text3: "条件渲染", 
                array1: [{"text":"数据一"}, {"text":"数据二"}],
                obj1: {
                    "value1":"数据一",
                    "value2":"数据二",
                    "value3":"数据三",
                    "value4":"数据四",
                },
            }
        },
        computed: {
        },
        components: {},
        methods: {
            changeText1() {
                this.text1 = "Hello Word"
            },
        },
    };
</script>
<style lang="scss">
    p {
        text-align: center;
        font-size: 20px;
        line-height: 2;
    }
</style>