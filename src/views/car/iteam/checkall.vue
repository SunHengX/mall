<template>
  <div class="checkall">
    <div class="allcheck">
      <div class="check-button" :class="{actives:getAllcheck}" @click="checkTo">
        <img src="../../../assets/img/check.png" />
      </div>
      <div class="title">
        <span>全选</span>
      </div>
      <div class="allprice">合计:￥ {{getAllPrice}}</div>
      <div class="pay" @click="showToastTxtOnly">付款({{getNum}})</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // allprices: 0
    };
  },
  methods: {
    showToastTxtOnly() {
      this.toast = this.$createToast({
        txt: "有钱吗，你就付！",
        type: "txt"
      });
      this.toast.show();
    },
    checkTo() {
      if (this.getAllcheck) {
        this.$store.state.carList.forEach(iteam => (iteam.check = false));
      } else {
        this.$store.state.carList.forEach(iteam => (iteam.check = true));
      }
    }
  },
  computed: {
    getAllPrice() {
      return this.$store.state.carList
        .filter(iteam => {
          return iteam.check;
        })
        .reduce((priceValue, iteam) => {
          // priceValue + iteam.price * iteam.count;

          return priceValue + iteam.price * iteam.count;
        }, 0)
        .toFixed(2);
    },
    getNum() {
      return this.$store.state.carList.filter(iteam => iteam.check).length;
    },
    getAllcheck() {
      if (this.$store.state.carList.length === 0) {
        return false;
      } else {
        let acheck = this.$store.state.carList.filter(iteam => !iteam.check)
          .length;
        return !acheck;
      }
      // console.log(acheck);
    }
  }
};
</script>

<style scoped>
.checkall {
  z-index: 999;
}
.checkall .allcheck {
  display: flex;
  position: relative;
  bottom: 0px;
  height: 35px;
  background: #f3f3f3;
  width: 100%;
}
.checkall .check-button {
  border: 2px solid red;
  flex: 0.8;
  height: 20px;
  width: 20px;
  align-items: center;
  /* display: inline-block; */
}
.checkall .check-button img {
  height: 100%;
  width: 100%;
}
.checkall .title {
  line-height: 35px;
  /* float: left; */
  flex: 2;
  margin-left: 10px;
}
.checkall .allprice {
  line-height: 35px;
  flex: 7;
}
.checkall .pay {
  flex: 4;
  background-color: red;
  text-align: center;
  line-height: 35px;
}
.actives {
  background: red;
}
</style>