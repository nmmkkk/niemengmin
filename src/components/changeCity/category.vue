<template>
    <div class="category">
        <dl class="m-categroy">
            <dt>按拼音字母选择:</dt>
            <dd v-for="(item,index) in list" :key='index'><a :href="'#city-'+item">{{item}}</a></dd>
        </dl>
        <dl class="m-categroy-section" v-for="(item,index) in cityGroup" :key='index' :id="'city-'+index">
            <dt>{{index}}</dt>
            <dd><span v-for="city in item" :key='city.id'>{{city.name}}</span></dd>
        </dl>
    </div>
</template>
<script>
export default {
data(){return{list:'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''),cityList:[],cityGroup:{}}},created(){
        var data = [
        {'id':1,'name':'北京','pinyin':'beijing','firstChar':'b'},
        {'id':10,'name':'上海','pinyin':'shanghai','firstChar':'s'},
        {'id':20,'name':'广州','pinyin':'guangzhou','firstChar':'g'},
        {'id':30,'name':'深圳','pinyin':'shenzhen','firstChar':'s'},
        {'id':40,'name':'天津','pinyin':'tianjin','firstChar':'t'},
        {'id':42,'name':'西安','pinyin':'xian','firstChar':'x'},
        {'id':45,'name':'重庆','pinyin':'chongqing','firstChar':'c'},
        {'id':50,'name':'杭州','pinyin':'hangzhou','firstChar':'h'},
        {'id':55,'name':'南京','pinyin':'nanjing','firstChar':'n'},
        {'id':57,'name':'武汉','pinyin':'wuhan','firstChar':'w'},
        {'id':59,'name':'成都','pinyin':'chengdu','firstChar':'c'},
        ];
        var obj = {}
        data.forEach((item,index) => {
            if(!obj[item.firstChar.toUpperCase()]){
                obj[item.firstChar.toUpperCase()] = []
            }
            obj[item.firstChar.toUpperCase()].push(item)
        });
        this.cityGroup = obj

}
}
</script>
<style lang='scss'>
@import "@/assets/css/changecity/categroy.scss";
</style>