import { createWebHistory, createRouter } from "vue-router";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import FaqView from "../views/FaqView.vue";
import MainView from "../views/MainView.vue";
import MypageView from "../views/MypageView.vue";
import RoomListView from "../views/RoomListView.vue";
import ReservationView from "../views/ReservationView.vue";
import MypageLeaveView from "../views/MypageLeaveView";

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
  {
    path: "/reservation",
    component: ReservationView,
  },
  {
    path: "/list",
    component: RoomListView,
  },
  {
    path: "/mypage/modify",
    component: MypageView,
  },
  {
    path: "/mypage/leave",
    component: MypageLeaveView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
