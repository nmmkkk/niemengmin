<template>
    <div class="search-panel">
        <el-row class="m-header-searchbar">
            <el-col :span="3" class="left">
                <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团">
            </el-col>
            <el-col :span="15" class="center">
                <div class="wrapper">
                    <el-input v-model="searchWord" placeholder="请输入内容" @focus='focus' @blur='blur'></el-input>
                    <el-button type="primary" icon="el-icon-search"></el-button>
                    <dl class="hotPlace" v-if="ishotPlace">
                        <dt>热门搜索</dt>
                        <dd v-for="(item,index) in hotPlaceList" :key="index">
                          <router-link :to="{name:'goods',params:{name:item}}">
                          {{item}}
                        </router-link>
                        </dd>
                    </dl>
                    <dl class="searchList" v-if="issearchList">
                        <dd v-for="(item,index) in searchList" :key="index">
                          <router-link :to="{name:'goods',params:{name:item}}">
                          {{item}}
                        </router-link>
                        </dd>

                    </dl>
                </div>
                <p class="suggest">
                    <a href="#" v-for="(item,index) in suggestList" :key="index">{{item}}</a>
                </p>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  data () {
    return {
      searchWord: '',
      isFocus: false,
      hotPlaceList:['京东第一温泉度假酒店','99旅店连锁','尚客优快捷酒店'],
      searchList:['火锅','火锅自助餐kkkkk','火锅 重庆'],
      suggestList:['京东第一温泉度假酒店','99旅店连锁','尚客优快捷酒店']
    }
  },
  computed: {
    ishotPlace: function () {
      return this.isFocus && !this.searchWord
    },
    issearchList: function () {
      return this.isFocus && this.searchWord
    }

  },
  methods: {
    focus () {
      this.isFocus = true
    },
    blur () {
      let self = this
      setTimeout(function () {
        self.isFocus = false
      }, 200)
    }
  }
}
</script>
<style lang='scss'>
    @import '@/assets/css/public/header/index.scss';
    @import '@/assets/css/public/header/search.scss'
</style>
