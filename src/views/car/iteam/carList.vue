<template>
  <div class="carList">
    <div v-for="(iteam,index) in carList" :key="index" class="list">
      <div
        class="check-button"
        :ischeck="iteam.check"
        :class="{active:iteam.check}"
        @click="changecheck(iteam)"
      >
        <img src="../../../assets/img/check.png" />
      </div>
      <div class="iteam-img">
        <img :src="iteam.img" />
      </div>
      <div class="title">
        <p>{{iteam.title}}</p>
        <p>{{iteam.comment}}</p>
        <p class="iteam-price">￥{{iteam.price}}</p>
        <p class="iteam-count">x{{iteam.count}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["carList"])
  },
  data() {
    return {
      ischeck: "false"
    };
  },
  methods: {
    changecheck(iteam) {
      // this.ischeck = !this.ischeck;
      // iteam.check = !this.ischeck;
      iteam.check = !iteam.check;
      // console.log(iteam.check);

      // carList[index].ischeck = !this.ischeck;
      // this.iteam.check = !this.ischeck;
      // console.log(index);
    }
  }
};
</script>

<style scoped>
.carList .list {
  margin-top: 10px;
  padding-bottom: 5px;
  display: flex;
  height: 150px;
  border-bottom: 3px solid #f7f7f7;
  /* width: 100%; */
}
.carList .iteam-img {
  flex: 1;
  /* height: 145px;
  
  width: 100px; */
  border-radius: 15px;
  overflow: hidden;
}
.carList .iteam-img img {
  height: 100%;
  width: 100%;
  /* overflow: hidden; */
}
.carList .list .title {
  position: relative;
  width: 250px;
  height: 150px;
  color: #333;
}
.carList .list .title p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.carList .list .title p:nth-child(1) {
  margin-top: 40px;
  font-size: 20px;
  font-weight: 700;
}
.carList .list .title p:nth-child(2) {
  margin-top: 20px;
}
.carList .iteam-price {
  position: absolute;
  bottom: 10px;
  left: 10px;
  font-size: 20px;
  color: red;
}
.carList .iteam-count {
  position: absolute;
  bottom: 5px;
  right: 10px;
  font-size: 16px;
}
.carList .check-button {
  position: relative;
  top: 50%;
  margin-top: -20px;
  height: 20px;
  width: 20px;

  border: 2px solid red;
  border-radius: 20px;
}
.carList .check-button img {
  width: 100%;
  height: 100%;
}
.carList .active {
  background: red;
}
</style>
