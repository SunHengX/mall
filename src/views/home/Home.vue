<template>
  <div id="Home">
    <nav-bar id="navbar">
      <div slot="iteam-center">购物街</div>
    </nav-bar>
    <tab-conol :tabconol="['流行','新款','精选']" @getindex="gettype" ref="TabConol1" v-show="isView"></tab-conol>
    <div class="scroll-list-wrap">
      <cube-scroll
        ref="scroll"
        :data="recommends"
        :options="options"
        :scrollEvents="scrollEvents"
        @scroll="isShow"
        @pulling-up="onPullingUp"
      >
        <home-swiper :banners="banners" @isLoad="isLoading" />
        <recommon :recommends="recommends" />
        <order />
        <tab-conol
          :tabconol="['流行','新款','精选']"
          @getindex="gettype"
          ref="TabConol2"
          v-show="!isView"
        ></tab-conol>
        <goods-list :goods="goods[currtype].list"></goods-list>
      </cube-scroll>
    </div>
    <TopBack @click.native="goback" v-show="isView"></TopBack>
  </div>
</template>

<script>
import NavBar from "../../components/common/navbar/Navbar";
import TabConol from "../../components/multiplexing/tabconol/TabNav";
import GoodsList from "../../components/common/goods/goodsList";
import Order from "./childern/Order";
import HomeSwiper from "./childern/HomeSwiper";
import Recommon from "./childern/Recommon";
import TopBack from "../../components/multiplexing/TopBack";
import { getHomemain, getHomegoods } from "../../network/home";
export default {
  components: {
    NavBar,
    TabConol,
    GoodsList,
    Order,
    HomeSwiper,
    Recommon,
    TopBack
  },
  data() {
    return {
      didi: [],
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      },
      currtype: "pop",
      options: {
        probeType: 2,
        pullUpLoad: true
      },
      scrollEvents: ["scroll"],
      isView: false,
      offsetTop: 0
    };
  },
  // 当组件创建之后就调用api，获取数据
  created() {
    getHomemain().then(res => {
      // console.log(res.data);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
    this.getgoods("pop");
    this.getgoods("sell");
    this.getgoods("new");
  },
  mounted() {
    // console.log(this.$refs.TabConol2.offsetTop);
  },
  methods: {
    getgoods(type) {
      const page = this.goods[type].page + 1;
      getHomegoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page = this.goods[type].page + 1;

        this.$refs.scroll.forceUpdate();
      });
    },
    gettype(index) {
      // if (index === 0) {
      //   this.currtype = "pop";
      // } else if (index === 1) {
      //   this.currtype = "new";
      // } else if (index === 2) {
      //   this.currtype = "sell";
      // }
      switch (index) {
        case 0:
          this.currtype = "pop";
          break;
        case 1:
          this.currtype = "new";
          break;
        case 2:
          this.currtype = "sell";
          break;
      }
      this.$refs.TabConol2.initial = index;
      this.$refs.TabConol1.initial = index;
    },
    onPullingUp() {
      this.getgoods(this.currtype);
      this.$refs.scroll.refresh();
    },
    goback() {
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    isShow(position) {
      if (position.y < -this.offsetTop) {
        this.isView = true;
      } else {
        this.isView = false;
      }
    },
    isLoading() {
      // console.log(this.$refs.TabConol2.$el.offsetTop);
      this.offsetTop = this.$refs.TabConol2.$el.offsetTop;
    }
  }
};
</script>

<style  scoped>
#Home {
  height: 100vh;
}
.cube-slide-dots > span {
  height: 5px;
  background: #fff;
}
.scroll-list-wrap {
  height: calc(100% - 98px);
}
#navbar {
  background: pink;
  color: aliceblue;
}
</style>