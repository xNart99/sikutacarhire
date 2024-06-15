import { createRouter, createWebHistory } from "vue-router";

const path = {
  ROOT: "/home",
  ABOUT: "/about",
};

const routes = [
  {
    path: "/",
    redirect: path.ROOT,
  },
  {
    path: "/",
    name: "LayoutCommon",
    component: () => import("../shared/LayoutCommon/LayoutCommon.vue"),
    children: [
      {
        path: path.ROOT,
        component: () => import("../components/HomePage/HomePage.vue"),
      },
      {
        path: path.ABOUT,
        component: () => import("../components/AboutPage/AboutPage.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
