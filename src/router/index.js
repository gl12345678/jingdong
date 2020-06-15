import Vue from "vue";
import VueRouter from "vue-router";
import Register from "../views/Register.vue";
import Login from "../views/Login.vue";
import index from "../views/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "register",
    redirect: "/login",
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },

  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/index",
    name: "index",
    component: () => import("../views/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
