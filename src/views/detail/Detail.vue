<template>
  <div class="detail">
    <detail-iteam></detail-iteam>
    <div class="scroll-list-wrap">
      <cube-scroll ref="scroll" :data="DetailImgs" @scroll="refresh">
        <cube-slide :data="DetailImgs" :interval="1000" class="swipers">
          <cube-slide-item v-for="(item, index) in DetailImgs" :key="index">
            <img :src="item" class="swiper-img" />
          </cube-slide-item>
        </cube-slide>
        <detail-info :iid="iid"></detail-info>
        <shop-info :iid="iid"></shop-info>
        <detail-goods-info :iid="iid" @detailLoad="detailimgload" />
        <detail-iteam-params :iid="iid" />
        <detail-comment :iid="iid"></detail-comment>
        <goods-list :goods="recommends" />
      </cube-scroll>
    </div>
    <detail-car :iid="iid" />
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
import DetailCar from "./chidern/DetailCar";
import GoodsList from "../../components/common/goods/goodsList";
import { getRecommend } from "../../network/detail";
export default {
  name: "Detail",
  data() {
    return {
      didi: [],
      iid: null,
      DetailImgs: [],
      recommends: []
    };
  },
  methods: {
    refresh() {
      // console.log(11);
    },
    detailimgload() {
      this.$refs.scroll.refresh();
    }
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      this.DetailImgs = res.result.itemInfo.topImages;
      // console.log(this.DetailImgs);
    });
    // console.log(scrollHeight);
    getRecommend().then(res => {
      this.recommends = res.data.list;
      // console.log(res);
    });
  },
  components: {
    DetailIteam,
    DetailInfo,
    ShopInfo,
    DetailGoodsInfo,
    DetailIteamParams,
    DetailComment,
    DetailCar,
    GoodsList
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
  /* height: 720px; */
  height: calc(100% - 93px);
}
.detail {
  position: relative;
  z-index: 20;
  height: 100vh;
  background-color: #fff;
}
</style>