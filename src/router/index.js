import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("~/views/Home.vue"),
  },
  {
    path: "/flat-color",
    name: "flat-color",
    component: () => import("~/views/FlatColor.vue"),
    children: [
      {
        path: "",
        name: "list",
        component: () => import("~/views/FlatColorList.vue"),
      },
      {
        path: "details/:id",
        name: "details",
        component: () => import("~/views/FlatColorDetail.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
