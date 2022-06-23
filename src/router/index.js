import Vue from "vue";
import VueRouter from "vue-router";
import PublicAreaView from "@/views/PublicAreaView";
import { ROUTES } from "@/settings/routes";

Vue.use(VueRouter);

const routes = [
  {
    path: ROUTES.HOME,
    name: "home",
    component: PublicAreaView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.afterEach((to) => {
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || "EmptyVue2App";
  });
});

export default router;
