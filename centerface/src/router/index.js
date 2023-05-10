import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import FaqView from "../views/FaqView.vue";
import MainView from "../views/MainView.vue";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    component: MainView,
  },
  {
    path: "/login",
    component: LoginView,
  },
  {
    path: "/signup",
    component: SignupView,
  },
  {
    path: "/faq",
    component: FaqView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
