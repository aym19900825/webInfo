import Vue from 'vue'
import Router from 'vue-router'
import History from '@/components/join'
import HistoryM from '@/components/historyM'
import Join from '@/components/history'
import JoinM from '@/components/joinM'
import About from '@/components/about'
import Test from '@/components/test'
import AboutM from '@/components/aboutM'
import Department from '@/components/department'
import DepartmentM from '@/components/departmentM'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/join',
      name: 'Join',
      component: Join
    },
    {
      path: '/joinM',
      name: 'JoinM',
      component: JoinM
    },
    {
      path: '/',
      name: 'AboutM',
      component: AboutM
    },
    {
      path: '/aboutM',
      name: 'AboutM',
      component: AboutM
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    ,
    {
      path: '/historyM',
      name: 'HistoryM',
      component: HistoryM
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/department',
      name: 'Department',
      component: Department
    },
    {
      path: '/departmentM',
      name: 'DepartmentM',
      component: DepartmentM
    }
  ]
})
