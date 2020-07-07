import Vue from 'vue';
import Router from 'vue-router';
import AddCouriers from './pages/couriers/Add.vue';
import DataCourier from './pages/couriers/Courier';
import EditCouriers from './pages/couriers/Edit.vue';
import IndexCourier from './pages/couriers/Index.vue';
import Home from './pages/Home.vue';
import Login from './pages/Login.vue';
import AddOutlet from './pages/outlets/Add.vue';
import EditOutlet from './pages/outlets/Edit.vue';
import IndexOutlet from './pages/outlets/Index.vue';
import DataOutlet from './pages/outlets/Outlet.vue';
import AddProduct from './pages/products/Add.vue';
import IndexProduct from './pages/products/Index.vue';
import DataProduct from './pages/products/Product.vue';
import store from './store.js';


Vue.use(Router);

//DEFINE ROUTE
const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/outlets',
      component: IndexOutlet,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'outlets.data',
          component: DataOutlet,
          meta: { title: 'Manage Outlets' }
        },
        {
          path: 'add',
          name: 'outlets.add',
          component: AddOutlet,
          meta: { title: 'Add New Outlet' }
        },
        {
          path: 'edit/:id',
          name: 'outlets.edit',
          component: EditOutlet,
          meta: { title: 'Edit Outlet' }
        },
      ]
    },
    {
      path: '/couriers',
      component: IndexCourier,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'couriers.data',
          component: DataCourier,
          meta: { title: 'Manage Couriers' }
        },
        {
          path: 'add',
          name: 'couriers.add',
          component: AddCouriers,
          meta: { title: 'Add New Courier' }
        },
        {
          path: 'edit/:id',
          name: 'couriers.edit',
          component: EditCouriers,
          meta: { title: 'Edit Courier' }
        },
      ]
    },
    {
      path: '/product',
      component: IndexProduct,
      meta: { requiresAuth: true },
      children: [
        {
          path: '',
          name: 'products.data',
          component: DataProduct,
          meta: { title: 'Manage Products' }
        },
        {
          path: 'add',
          name: 'products.add',
          component: AddProduct,
          meta: { title: 'Add New Product' }
        },
      ]
    }
  ]
});

//Navigation Guards
router.beforeEach((to, from, next) => {
  store.commit('CLEAR_ERRORS');
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let auth = store.getters.isAuth
    if (!auth) {
      next({ name: 'login' });
    }
    next();
  }
  next();
})

export default router;