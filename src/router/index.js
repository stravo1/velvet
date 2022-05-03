import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../components/Main.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInLeft",
      leaveClass: "animate__animated animate__fadeOutRight",
    },
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/View.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight",
      leaveClass: "animate__animated animate__fadeOutLeft",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
