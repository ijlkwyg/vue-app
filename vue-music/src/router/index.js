import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Radio from '../components/home/radio/Radio'
import Recommend from '../components/home/recommend/recommend'
import Rank from '../components/home/rank/rank'
import Singer from '../components/home/singer/singer'
import RecommendDetail from '../components/home/recommend/recommend-detail/recommend-detail'
import Login from '../components/login/login'
import LoginContent from '../components/login/loginContent/loginContent'
import phoneLogin from '../components/login/phoneLogin/phoneLogin'
import phoneCaptcha from '../components/login/phoneCaptcha/phoneCaptcha'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      children:[
        {
          path: '/radio',
          name: 'Radio',
          meta:{index:0},
          component: Radio
        },
        {
          path: '/recommend',
          name: 'Recommend',  
          meta:{index:1},
          component: Recommend
        }
      ],
      component: Home,
      redirect:'/recommend' 
    },
    {
      path: '/rank',
      name: 'Rank',
      component: Rank
    },
    {
      path: '/singer',
      name:'Singer',
      component:Singer
    },
    {
      path: '/login',
      name:'Login',
      component:Login
    },
    {
      path:`/recommend-detail/:id`,
      component:RecommendDetail
    },
    {
      path: '/loginContent',
      component: LoginContent
    },
    {
      path: '/phoneLogin',
      component:phoneLogin
    },
    {
      path: '/phoneCaptcha',
      component:phoneCaptcha
    }

  ]
})
