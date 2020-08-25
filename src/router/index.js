import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import defaultPage from '@/layout/default.vue'
import blankPage from '@/layout/blank.vue'
import Index from '@/page/index.vue'
import ChangeCity from '@/page/changeCity.vue'
import goodsList from '@/page/goodsList.vue'
Vue.use(VueRouter)

export default new VueRouter({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'defaultPage',
      component: defaultPage,
      redirect:'/index',
      children:[{
        path: 's/:name',
        name: 'goods',
        component: goodsList
      },{
        path:'/index',
        name:'index',
        component: Index
      },{
        path: '/changeCity',
        name: 'changeCity',
        component: ChangeCity
      },]
    },{
      path: '/blank',
      name: 'blankPage',
      component: blankPage
    },
    
  ]
})
