// Vue related
import Vue from 'vue'
import Router from 'vue-router'
import BootstrapVue from 'bootstrap-vue'

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../../static/css/style.css'

// Components
import Home from '@/components/Home'
import PublistPage from '@/components/PublistPage'
import NewsPage from '@/components/NewsPage'
import ToolPage from '@/components/ToolPage'
import Failures from '@/components/Failures'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/news',
      name: 'News',
      component: NewsPage
    },
    {
      path: '/pub',
      name: 'PublistPage',
      component: PublistPage
    },
    {
      path: '/tools',
      name: 'ToolPage',
      component: ToolPage
    },
    {
      path: '/failures',
      name: 'FailuresPage',
      component: Failures
    },
    {
      path: '*',
      name: '404',
      component: Home
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    if(savedPosition){
      return savedPosition;
    }else{
      document.getElementById('app').scrollIntoView();
      return null;
    }
  }
})
