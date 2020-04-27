<template>
  <div class="iteamParam">
    <table>
      <tr v-for="(iteam,indey) in size" :key="indey">
        <td v-for="(td ,indez) in iteam" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table>
      <tr v-for="(iteam,index) in iteamParam " :key="index" class="info-params">
        <td class="name">{{iteam.key}}</td>
        <td class="info">{{iteam.value}}</td>
      </tr>
    </table>
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
  data() {
    return {
      iteamParam: [],
      size: []
    };
  },
  created() {
    getDetail(this.iid).then(res => {
      console.log(res);
      this.iteamParam = res.result.itemParams.info.set;
      this.size = res.result.itemParams.rule.tables[0];
      console.log(this.size);
    });
  }
};
</script>

<style scoped>
table {
  border: 1px solid #a6c1e4;

  font-family: Arial;

  border-collapse: collapse;
  width: 100%;
}
table td {
  border: 1px solid #a6c1e4;

  text-align: center;

  height: 30px;

  padding-top: 5px;

  font-size: 16px;
}
.info-params {
  margin: 20px;
  border: 1px solid #a6c1e4;
}
.name {
  color: red;
}
</style>