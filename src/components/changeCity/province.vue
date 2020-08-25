<template>
  <div>
    <span class="name">按省份选择：</span>
    <m-select
      :list="provinceList"
      title="省份"
      :value="province"
      :showwrapperActive="provinceActive"
      @change_active="changeProvinceActive"
      @change="changeProvince"
    />
    <m-select
      :list="cityList"
      title="省份"
      :value="city"
      :showwrapperActive="cityActive"
      @change_active="changeCityActive"
      @change="changeCity"
    />
    <span>直接搜索：</span>
    <el-select
      v-model="searchWord"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in searchList" :key="item" :label="item" :value="item"></el-option>
    </el-select>
  </div>
</template>
<script>
import MSelect from "./select.vue";
export default {
  data() {
    return {
      provinceList: ["浙江", "江苏", "云南", "黑龙江", "江西", "山东"],
      province: "省份",
      cityList: ["北京", "上海", "深圳", "广州", "佳木斯", "济南"],
      city: "城市",
      provinceActive: false,
      cityActive: false,
    searchList:["浙江", "江苏", "云南", "黑龙江", "江西", "山东"],
    searchWord:'',
    loading:false
    };
  },
  components: { MSelect },
  methods: {
      remoteMethod(){},
    changeProvinceActive(flag) {
      this.provinceActive = flag;
      if (flag) {
        this.cityActive = false;
      }
    },
    changeCityActive(flag) {
      this.cityActive = flag;
      if (flag) {
        this.provinceActive = false;
      }
    },
changeProvince(value){this.province = value},
changeCity(value){this.city = value},
  },
};
</script>
<style lang='scss'>
@import "@/assets/css/changecity/iselect.scss";
</style>
