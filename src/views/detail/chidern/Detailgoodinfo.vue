<template>
  <div class="degoods-info">
    <div class="desc">
      <p>{{detailInfo.desc}}</p>
    </div>
    <!-- <div
      class="key"
      v-if="detailInfo.detailImage !== undefined && detailInfo.detailImage.length>0"
    >{{detailInfo.detailImage[0].key}}</div>-->
    <div class="detailImage">
      <img v-for="(iteam,index) in list" :key="index" :src="iteam" />
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
      this.detailInfo = res.result.detailInfo;
      this.list = res.result.detailInfo.detailImage[0].list;
      console.log(this.list);
    });
  },

  data() {
    return {
      detailInfo: {},
      list: []
    };
  }
};
</script>

<style scoped>
.desc {
  height: 80px;
  line-height: 25px;
  margin-top: 15px;
  border: 2px solid #f7f7f7;
  padding: 3px;
}
.detailImage {
  margin-top: 20px;
  overflow: hidden;
  width: 100%;
}
.detailImage img {
  width: 100%;
}
</style>