import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "aboutPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../pages/AboutPage.vue"),
  },
  {
    path: "/portfolio",
    name: "PortfolioPage",
    component: () => import("../pages/PortfolioPage.vue"),
  },
  {
    path: "/contacts",
    name: "ContactsPage",
    component: () => import("../pages/ContactsPage.vue"),
  },
  {
    path: "/portfolio/:id",
    name: "SinglePortfolioPage",
    component: () => import("../pages/SinglePortfolioPage.vue"),
    
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
