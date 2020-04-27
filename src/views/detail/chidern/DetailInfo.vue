<template>
  <div class="info">
    <div class="info-title">
      <p>{{titles}}</p>
    </div>
    <div class="mess-price">
      <span class="info-price">{{price}}</span>
      <span class="info-oldPrice">{{oldprice}}</span>
      <span style="backgroundColor:pink; color:#fff" class="info-discount">{{discountDesc}}</span>
    </div>
    <div class="info-mess">
      <div>
        <span>{{columns[0]}}</span>
      </div>

      <div>
        <span>{{columns[1]}}</span>
      </div>
      <div>
        <span v-if="service !== undefined && service.length>0">{{service[0].name}}</span>
      </div>
    </div>
    <div class="attach">
      <span v-for="index in 3" :key="index" class="attach-iteam">
        <div class="attach-img">
          <img v-if="service !== undefined && service.length>0" :src="service[index-1].icon" alt />
          <span v-if="service !== undefined && service.length>0">{{service[index-1].name}}</span>
        </div>
      </span>
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
      console.log(res);
      const infomess = res.result.itemInfo;
      this.titles = infomess.title;
      this.price = infomess.price;
      this.oldprice = res.result.itemInfo.oldPrice;
      this.discountDesc = infomess.discountDesc;
      this.discountBgColor = infomess.discountBgColor;
      this.columns = res.result.columns;
      this.service = res.result.shopInfo.services;
    });
  },
  data() {
    return {
      titles: null,
      price: null,
      oldprice: null,
      discountDesc: null,
      discountBgColor: null,
      columns: [],
      service: []
    };
  }
};
</script>

<style scoped>
.info .info-title {
  color: #333;
  font-family: "KaiTi_GB2312" !important;
  font-size: 19px !important;
  font-weight: 900;
  margin: 10px 0;
}
.mess-price {
  height: 30px;
  position: relative;
}
.info-price {
  position: relative;
  font-size: 25px;
  color: pink;
  margin: 0 8px;
  top: 5px;
}

.info-oldPrice {
  position: relative;
  color: #666;
  text-decoration: line-through;
  top: 5px;
}
.info-discount {
  position: relative;
  top: -5px;
  border-radius: 3px;
}
.info-mess {
  margin-top: 20px;
  display: flex;
  border-bottom: 2px solid #f2f2f2;
  padding-bottom: 10px;
}
.info-mess div {
  flex: 1;
  text-align: center;
  line-height: 20px;
}
.attach {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
  /* left: 5px; */
  padding-bottom: 20px;
  border-bottom: 5px solid #f2f2f2;
  font-size: 12px;
  color: #666;
}
.attach-iteam {
  flex: 1;
}
.attach-img {
  margin-left: 15px;
  height: 15px;
}
.attach-img img {
  vertical-align: middle;
  height: 100%;
}
</style>