<template>
    <div class="life">
        <h1>{{ msg }}</h1>
        <p>
            {{message}}
        </p>
        <button @click="changeMessage">修改message</button>
    </div>
</template>

<script>
    export default {
        name: 'life',
        props: {
            msg: String
        },
        data() {
            return {
                message: "我是子组件",
            }
        },
        methods: {
            changeMessage() {
              this.message = '子组件触发updata';
            }
        },
        beforeCreate() {
            console.group('------beforeCreate创建前状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data)); //undefined 
            console.log("%c%s", "color:red", "message: " + this.message)
        },
        created() {
            console.group('------created创建完毕状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //undefined
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data)); //已被初始化 
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
        },
        beforeMount() {
            console.group('------beforeMount挂载前状态------');
            console.log("%c%s", "color:red", "el     : " + (this.$el)); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data)); //已被初始化  
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化
        },
        mounted() {
            console.group('------mounted 挂载结束状态------');
            console.log("%c%s", "color:red", "el     : " + this.$el); //已被初始化
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data)); //已被初始化
            console.log("%c%s", "color:red", "message: " + this.message); //已被初始化 
        },
        beforeUpdate() {
            console.group('beforeUpdate 更新前状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        updated() {
            console.group('updated 更新完成状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        activated() {
            console.group('activated 缓存组件唤醒状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        deactivated() {
            console.group('activated 缓存组件离开状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        beforeDestroy() {
            console.group('beforeDestroy 销毁前状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message);
        },
        destroyed() {
            console.group('destroyed 销毁完成状态===============》');
            console.log("%c%s", "color:red", "el     : " + this.$el);
            console.log(this.$el);
            console.log("%c%s", "color:red", "data   : " + JSON.stringify(this.$data));
            console.log("%c%s", "color:red", "message: " + this.message)
        },

    }

</script>
