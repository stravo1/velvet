import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: () => import("../components/Main.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInLeft easey",
      leaveClass: "animate__animated animate__fadeOutRight easey",
    },
  },
  {
    path: "/view",
    name: "view",
    component: () => import("../components/View.vue"),
    meta: {
      enterClass: "animate__animated animate__fadeInRight easey",
      leaveClass: "animate__animated animate__fadeOutLeft easey",
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
