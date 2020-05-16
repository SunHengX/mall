<template>
  <div class="shopinfo">
    <div class="shop-mess">
      <div class="logoImg">
        <img :src="logo" />
      </div>
      <span class="shop-name">{{name}}</span>
    </div>
    <div class="goodsinfo">
      <div class="shop-sell">
        <div class="sells">{{sells}}</div>
        <span class="sells-text">总销量</span>
      </div>
      <div class="goods">
        <div class="goods-num">{{goods}}</div>
        <span class="gools-text">全部宝贝</span>
      </div>
      <div class="score">
        <div
          class="score-name"
          v-for="(iteam,index) in score"
          :key="index"
        >{{iteam.name}} ： {{iteam.score}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { getDetail } from "../../../network/detail";
export default {
  props: {
    iid: {
      type: String
    }
  },
  created() {
    getDetail(this.iid).then(res => {
      const shop = res.result.shopInfo;
      this.name = shop.name;
      this.logo = shop.shopLogo;
      this.sells = shop.cSells;
      this.goods = shop.cGoods;
      this.score = shop.score;
      // console.log(res);
    });
  },
  data() {
    return {
      name: null,
      logo: null,
      sells: null,
      goods: null,
      score: []
    };
  }
};
</script>

<style scoped>
.shopinfo {
  margin-top: 20px;
}
.shop-mess {
  display: flex;
  line-height: 80px;
}
.shop-name {
  margin-left: 20px;
  color: #666;
  font-size: 18px;
}
.logoImg {
  width: 70px;
  height: 70px;
  border-radius: 50px;
  overflow: hidden;
  border: 3px solid #f1f1f1;
  margin-left: 20px;
}
.logoImg img {
  width: 100%;
  height: 100%;
}
.goodsinfo {
  margin-top: 20px;
  display: flex;
}
.shop-sell {
  flex: 1;
}
.goods {
  flex: 1;
}
.sells,
.goods-num {
  text-align: center;
  font-size: 20px;
  margin-bottom: 13px;
}
.sells-text,
.gools-text {
  text-align: center;
  margin-left: 30px;
}
.score {
  flex: 1;
}
</style>