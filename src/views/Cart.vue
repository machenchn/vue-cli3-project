<template>
    <div class="cart">
        <div class="cart-goods-list">
            <div class="list-head">
                <div class="col col-img">商品图片</div>
                <div class="col col-name">商品名称</div>
                <div class="col col-price">单价</div>
                <div class="col col-num">数量</div>
                <div class="col col-total">小计</div>
                <div class="col col-action">操作</div>
            </div>
        </div>
        <div class="list-body">
            <div class="list-item" v-for="(item, index) in cartList">
                <div class="item-box">
                    <div class="col col-img">
                        <img class="good-img" :src="item.image_url">
                    </div>
                    <div class="col col-name">{{item.product_name}}</div>
                    <div class="col col-price">{{item.salePrice}} 元</div>
                    <div class="col col-num">
                        <input class="num-input" v-model="item.num">
                    </div>
                    <div class="col col-total">{{item.salePrice * item.num}} 元</div>
                    <div class="col col-action">
                        <span @click="add(item)">添加</span>
                        <span @click="reduce(item)">减少</span>
                        <span @click="remove(index)">删除</span>
                    </div>
                </div>
            </div>
        </div>
        <div class="list-total">
            <p>购物车中包含 {{cartsTotal}} 件商品， 共计 {{cartsPrice}} 元</p>
        </div>
    </div>
</template>

<script>
    // @ is an alias to /src

    export default {
        name: 'Cart',
        data() {
            return {
                cartList: [{
                    commodity_id: "1234567890",
                    goodsId: "0123456789",
                    goodsUrl: "//mi.com",
                    image_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535103027.24861415.jpg",
                    num: "2",
                    product_name: "小米电视4A",
                    salePrice: "4499",
                },{
                    commodity_id: "1234567890",
                    goodsId: "0123456789",
                    goodsUrl: "//mi.com",
                    image_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535103027.24861415.jpg",
                    num: "2",
                    product_name: "小米电视5A",
                    salePrice: "5499",
                },{
                    commodity_id: "1234567890",
                    goodsId: "0123456789",
                    goodsUrl: "//mi.com",
                    image_url: "//cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1535103027.24861415.jpg",
                    num: "2",
                    product_name: "小米电视6A",
                    salePrice: "6499",
                }]
            }
        },
        computed: {
            cartsTotal() {
                let _total = 0;
                this.cartList.forEach(item => {
                    if (item.num) _total += parseInt(item.num);
                })
                return _total;
            },
            cartsPrice() {
                let _price = 0;
                this.cartList.forEach(item => {
                    if (item.salePrice) _price += parseInt(item.salePrice) * parseInt(item.num);
                })
                return _price;
            },
        },
        components: {},
        methods: {
            add(item) {
                item.num = parseInt(item.num) + 1;
            },
            reduce(item) {
                item.num = parseInt(item.num) - 1;
            },
            remove(key) {
                this.cartList.splice(key, 1);
            },
        },
    };
</script>
<style lang="scss">
    .cart {
        width: 800px;
        margin: 0 auto;
        // border: 1px solid #e0e0e0;
    }

    .num-input {
        width: 40px;
    }

    .list-head {
        height: 70px;
        line-height: 70px;
        padding-right: 26px;
        color: #424242;
    }

    .good-img {
        width: 80px;
        vertical-align: middle;
    }

    .col {
        width: 120px;
        display: inline-block;
        font-size: 16px;
    }

    .item-box {
        padding: 15px 26px 15px 0;
        border-top: 1px solid #e0e0e0;

        .col-action {
            color: red;
            cursor: pointer;
        }

        .col-total {
            color: #ff6700;
        }
    }
</style>