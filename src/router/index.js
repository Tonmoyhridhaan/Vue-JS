import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import About from '@/components/About'
import History from '@/components/History'
import Team from '@/components/Team'
import Test from '@/components/AboutTeam'
import Parent from '@/components/Parent'
import Product from '@/components/Product'
import Create from '@/components/Create'
import Divisions from '@/components/location/Divisions'
import CreateDivision from '@/components/location/CreateDivision'
import CreateDistrict from '@/components/location/CreateDistrict'
import User from '@/components/User'
import Login from '@/components/template/Login'
import Home from '@/components/template/Home'
import Dashboard from '@/components/template/Dashboard'
import Profile from '@/components/template/Profile'
import ChangePassword from '@/components/template/ChangePassword'
import ChangePicture from '@/components/template/ChangePicture'
import Student from '@/components/template/Student'
import Teacher from '@/components/template/Teacher'
import CreateStudent from '@/components/template/CreateStudent'
import CreateTeacher from '@/components/template/CreateTeacher'
import TableTeacher from '@/components/template/TableTeacher'
import TableStudent from '@/components/template/TableStudent'
import EditTeacher from '@/components/template/EditTeacher'
import EditStudent from '@/components/template/EditStudent'
Vue.use(Router)

export default new Router({
  mode : 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/about-us',
      name: 'About',
      component: About
    },
    {
      path: '/history',
      name: 'History',
      component: History
    },
    {
      path: '/team',
      name: 'Team',
      component: Team
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    },
    {
      path: '/parent',
      name: 'Parent',
      component: Parent
    },
    {
      path: '/products',
      name: 'Products',
      component: Product
    },
    {
      path: '/create',
      name: 'CreateProduct',
      component: Create
    },
    {
      path: '/location',
      name: 'Divisions',
      component: Divisions
    },
    {
      path: '/create-districts',
      name: 'CreateDistrict',
      component: CreateDistrict
    }
    ,
    {
      path: '/user/:id',
      component: User
    },
    {
      path: '/login',
      name:'Login',
      component: Login
    },
    {
      path: '/dashboard',
      name:'Dashboard',
      component: Dashboard,
      children : [
        {
          path: '',
          component: Home
        },
        {
          path: 'home',
          name:'Home',
          component: Home
        },
        {
          path: 'student',
          name:'Student',
          component: Student,
          children : [
            {
              path: 'create-student',
              component: CreateStudent
            },
            {
              path: 'table-student',
              component: TableStudent,
            },
            {
              path: 'edit-student/:id',
              component: EditStudent
            }
          ]
        },
        {
          path:'teacher',
          name:'Teacher',
          component: Teacher,
          children : [
            {
              path: 'create-teacher',
              component: CreateTeacher
            },
            {
              path: 'table-teacher',
              component: TableTeacher,
            },
            {
              path: 'edit-teacher/:id',
              component: EditTeacher
            },
          ]
        },
        {
          path: 'profile',
          name:'Profile',
          component: Profile,
          children : [
            {
              path: '',
              component: ChangePassword
            },
            {
              path: 'change-password',
              component: ChangePassword
            },
            {
              path: 'change-picture',
              component: ChangePicture
            }
          ]
        }
      ]
    }
   
  ]
})
router.push({ name: 'user', params: { userId: '123' } })
