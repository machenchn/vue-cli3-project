<template>
    <div class="demo">
        <h1 @click="remove">{{message}}</h1>
        <Life :msg="childtext" v-if="showchild"></Life>
    </div>
</template>

<script>
    // @ is an alias to /src
    import Life from '@/components/Life.vue';

    export default {
        name: "lifecycle-hooks",
        data() {
            return {
                message: "Vue的生命周期",
                childtext: "这是我儿子",
                showchild: true
            }
        },
        computed: {},
        components: {
            Life
        },
        methods: {
            remove() {
                this.showchild = false;
            }
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