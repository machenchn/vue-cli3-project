<template>
    <div class="cart">
        <div class="cart-goods-list">
            <div class="list-head">
                <div class="col col-img">&nbsp;</div>
                <div class="col col-name">商品名称</div>
                <div class="col col-price">单价</div>
                <div class="col col-num">数量</div>
                <div class="col col-total">小计</div>
                <div class="col col-action">操作</div>
            </div>
        </div>
        <div class="list-body">
            <div class="list-item">
                <div class="item-box">
                    <div class="col col-img">&nbsp;</div>
                    <div class="col col-name">商品名称</div>
                    <div class="col col-price">单价</div>
                    <div class="col col-num">数量</div>
                    <div class="col col-total">小计</div>
                    <div class="col col-action">操作</div>
                </div>
            </div>
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
                marketPrice: "4499",
                num: 2,
                product_name: "小米电视4A 65英寸",
                salePrice: "4499",
                subtotal: "8998",
            }]
      }
  },
  components: {
  },
};
</script>
