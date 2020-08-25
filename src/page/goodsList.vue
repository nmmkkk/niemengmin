<template>
<div class="page-product">
    <el-row class="m-crumbs"><crumbs /></el-row>
    <el-row>
        <el-col :span="19">
            <el-row>kkk</el-row>
            <el-row>jjj</el-row>
        </el-col>
        <el-col :span="5">map+fav</el-col>
    </el-row>
</div>
    
</template>
<script>
import crumbs from '@/components/products/crumbs.vue'
export default {
    components:{crumbs}
}
</script>
<style lang='scss'>
@import "@/assets/css/products/index.scss";
</style>