import { createRouter, createWebHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../pages/Home.vue"),
  },
  {
    path: "/about-us",
    name: "AboutUs",
    component: () => import("../pages/AboutUs.vue"),
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
