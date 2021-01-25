import Router from 'vue-router';
import ProductList from './components/products/ProductList.vue';
import ProductOperations from './components/products/ProductOperations.vue';
import ProductSale from './components/products/ProductSale.vue';
import Vue from 'vue';

Vue.use(Router);

const routes = [
  { path: "/", component: ProductList },
  { path: "/productOperations", component: ProductOperations },
  { path: "/productSale", component: ProductSale },
  { path: "*", redirect: "/" }
];

export const router = new Router({
  mode: "history",
  routes
});
