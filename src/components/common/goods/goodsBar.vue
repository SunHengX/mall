<template>
  <div class="goods-iteam" @click="getIteams">
    <img v-lazy="showImage" />
    <div class="info"></div>
    <p>{{goodsiteam.title}}</p>
    <span class="price">{{getprice}}</span>
    <span class="cfav">{{goodsiteam.cfav}}</span>
  </div>
</template>

<script>
export default {
  props: {
    goodsiteam: {
      type: Object,
      default() {
        Object;
      }
    }
  },
  methods: {
    getIteams() {
      this.$router.push("/detail/" + this.goodsiteam.iid);
    }
  },
  computed: {
    showImage() {
      return this.goodsiteam.image || this.goodsiteam.show.img;
    },
    getprice() {
      return this.goodsiteam.price || this.goodsiteam.orgPrice;
    }
  }
};
</script>

<style>
.goods-iteam {
  position: relative;
  width: 48%;
  height: 280px;
  border-radius: 8px;
  overflow: hidden;
  padding-bottom: 40px;
  margin-top: 8px;
}
.goods-iteam img {
  width: 100%;
  height: 100%;
}
.goods-iteam .info {
  position: absolute;
  bottom: 1px !important;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
  font-size: 14px;
}
.goods-iteam p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: -5px;
}
.goods-iteam .price {
  color: pink;
  font-size: 16px;
  margin-right: 36px;
  margin-left: 28px;
}
.goods-iteam .cfav {
  position: relative;
}
.goods-iteam .cfav::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("../../../assets/img/sc.png") 0 0/14px 14px;
}
</style>