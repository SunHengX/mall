<template>
  <div>
    <div class="addcar">
      <div class="kefu">
        <p class="iconfont">&#xe60d</p>
        <span>客服</span>
      </div>
      <div class="dianpu">
        <p class="iconfont">&#xe71b</p>
        <span>店铺</span>
      </div>
      <div class="shoucang">
        <p class="iconfont">&#xe60f</p>
        <span>收藏</span>
      </div>
      <div class="adcar" @click="Addcar">
        <span @click="showToastTxtOnly">加入购物车</span>
      </div>
      <div class="add">
        <span>添加收藏</span>
      </div>
      <!-- <div>
        <img :src="img" />
      </div>-->
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
  methods: {
    Addcar() {
      // console.log(this.img);
      // console.log(this.title);
      // console.log(this.price);
      // console.log(this.comment);
    },
    showToastTxtOnly() {
      const product = {};
      this.toast = this.$createToast({
        txt: "加入购物车成功",
        type: "txt"
      });
      this.toast.show();
      product.img = this.img;
      product.title = this.title;
      product.price = this.price;
      product.comment = this.comment;
      product.iid = this.iid;
      // this.$store.commit("addCar", product);

      this.$store.dispatch("addCar", product);
    }
  },
  data() {
    return {
      img: [],
      title: null,
      comment: null,
      price: null
    };
  },
  created() {
    getDetail(this.iid).then(res => {
      const product = {};
      // console.log(res);
      product.img = this.img = res.result.detailInfo.detailImage[0].list[0];
      product.title = this.title = res.result.itemInfo.title;
      product.price = this.price = res.result.itemInfo.lowNowPrice;
      product.comment = this.comment = res.result.itemInfo.desc;
      product.iid = this.iid;
    });
  }
};
</script>

<style>
.addcar {
  width: 100%;
  height: 49px;
  background: red;
  z-index: 99;
  position: fixed;
  bottom: 0;
  display: flex;
  text-align: center;
  /* line-height: 49px; */
  background-color: #f7f7f7;
  width: 100%;
  min-width: 320px;
  max-width: 640px;
  margin: 0 auto;
  font-size: 14px;
  font-family: -apple-system, Helvetica, sans-serif;
  color: #666;
  line-height: 1.5;
  background-color: #f6f6f6;
}
.kefu {
  flex: 1;
}

.dianpu {
  flex: 1;
}
.shoucang {
  flex: 1;
}
.addcar p {
  font-size: 20px;
}
.adcar {
  flex: 1.5;
  background: red;
  line-height: 49px;
}
.add {
  flex: 1.5;
  background: yellow;
  line-height: 49px;
}
</style>