<template>
  <div class="m-istyle">
    <dl @mouseover="over">
      <dt>{{nav.title}}</dt>
      <dd
        v-for="(item,index) in nav.list"
        :key="index"
        :class="{active: kind==item.tab}"
        :data-type="item.tab"
      >{{item.text}}</dd>
    </dl>
    <ul class="ibody">
      <li v-for="(item,index) in list" :key="index">
        <el-card :body-style="{ padding: '0px' }" shadow="never">
          <img :src="item.image" class="image" />
          <div class="cbody">
            <div class="title">{{item.title}}</div>
            <div class="sub-title">{{item.sub_title}}</div>
            <div class="price-info">
              <span>
                <span class="price-symbol">￥</span>
                <span class="current-price">{{item.price_info.current_price}}</span>
              </span>
              <span class="old-price">门市价￥{{item.price_info.old_price}}</span>
              <span class="sold">{{item.address}}</span>
            </div>
          </div>
        </el-card>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      kind: "all",
      list: [
        {
          image:
            "//p0.meituan.net/bbia/f58fafc0be2bc3a69dfcac20260888c2201000.jpg@267w_150h_1e_1c",
          title: "COSTA COFFEE(新国瑞店)",
          sub_title: "巧克力酥卷小美式，建议单人使用",
          price_info: { current_price: 18, old_price: 36 },
          address: "崇文门"
        },
        {
          image:
            "https://p1.meituan.net/msmerchant/9e4e852d82b8749671f0fcacc7f79a38185869.jpg@267w_150h_1e_1c",
          title: "宽板凳老灶火锅（古城店）",
          sub_title: "好吃又便宜",
          price_info: { current_price: 444, old_price: 999 },
          address: "三里屯"
        }
      ]
    };
  },
  props: ["nav"],
  methods: {
    over(e) {
      let dom = e.target;
      let tagName = dom.tagName.toLowerCase();
      if (tagName != "dd") {
        return false;
      }

      this.kind = dom.getAttribute("data-type");
    }
  }
};
</script>
<style lang='scss'>
@import "@/assets/css/index/artistic.scss";
</style>