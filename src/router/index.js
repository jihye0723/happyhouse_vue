import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import ArticleView from "@/views/ArticleView.vue";
import HouseView from "@/views/HouseView.vue";
import InterestView from "@/views/InterestView.vue";
import UserView from "@/views/UserView.vue";
import MainContent from "@/components/MainContent.vue";
import HouseDetail from "@/components/house/HouseDetail.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseRegist from "@/components/house/HouseRegist.vue";
import UserDelete from "@/components/user/UserDelete.vue";
import UserLogin from "@/components/user/UserLogin.vue";
import UserModify from "@/components/user/UserModify.vue";
import UserRegist from "@/components/user/UserRegist.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/house",
    name: "house",
    component: HouseView,
  },
  {
    path: "/interest",
    name: "interest",
    component: InterestView,
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
  },
  {
    path: "/article",
    name: "article",
    component: ArticleView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
