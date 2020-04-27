<template>
  <div class="detail">
    <detail-iteam></detail-iteam>
    <!-- <div class="scroll-list-wrap">
    <cube-scroll ref="scroll" :data="DetailImgs">-->
    <cube-slide :data="DetailImgs" :interval="1000" class="swipers">
      <cube-slide-item v-for="(item, index) in DetailImgs" :key="index">
        <img :src="item" class="swiper-img" />
      </cube-slide-item>
    </cube-slide>
    <detail-info :iid="iid"></detail-info>
    <shop-info :iid="iid"></shop-info>
    <detail-goods-info :iid="iid" />
    <detail-iteam-params :iid="iid" />
    <detail-comment :iid="iid"></detail-comment>
    <!-- </cube-scroll>
    </div>-->
  </div>
</template>

<script>
import DetailIteam from "./chidern/Detail-iteam";
import { getDetail } from "../../network/detail";
import DetailInfo from "./chidern/DetailInfo";
import ShopInfo from "./chidern/DetailShop";
import DetailGoodsInfo from "./chidern/Detailgoodinfo";
import DetailIteamParams from "./chidern/DetailitemParams";
import DetailComment from "./chidern/Detail-comment";
export default {
  name: "Detail",
  data() {
    return {
      didi: [],
      iid: null,
      DetailImgs: []
    };
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.DetailImgs = res.result.itemInfo.topImages;
      console.log(this.DetailImgs);
    });
  },
  components: {
    DetailIteam,
    DetailInfo,
    ShopInfo,
    DetailGoodsInfo,
    DetailIteamParams,
    DetailComment
  }
};
</script>

<style scoped>
.swipers {
  width: 100%;
  height: 300px;
}
.swipers .swiper-img {
  width: 100%;
  overflow: hidden;
}
.scroll-list-wrap {
  height: 720px;
}
.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
</style>