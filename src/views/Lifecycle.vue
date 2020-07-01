<template>
    <div class="demo">
        <h1>{{message}}</h1>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: "lifecycle-hooks",
        data() {
            return {
                message: "Vue的生命周期"
            }
        },
        computed: {},
        components: {},
        beforeCreate() {
            console.group('------beforeCreate创建前状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); //undefined 
            console.log("%c%s", "color:red", "message: " + this.message)
        },
        created() {
            console.group('------created创建完毕状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化 
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
        },
        beforeMount() {
            console.group('------beforeMount挂载前状态------');
            console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化  
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化  
        },
        mounted() {
            console.group('------mounted 挂载结束状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data); //已被初始化
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
        },
        beforeUpdate() {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        updated() {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        activated() {

        },
        deactivated() {

        },
        beforeDestroy() {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        destroyed() {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + this.$data);
            console.log("%c%s", "color:red", "message: " + this.message)
        },
        methods: {
            
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