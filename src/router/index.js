import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    meta: { playPhase: false },
  },
  {
    path: "/category",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "category" */ "../views/Category.vue"),
    meta: { playPhase: true },
  },
  {
    path: "/play",
    name: "Play",
    component: () => import(/* webpackChunkName: "play" */ "../views/Play.vue"),
    meta: { playPhase: true },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.playPhase && !store.getters.GET_PLAY_PHASE) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
