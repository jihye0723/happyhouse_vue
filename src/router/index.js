import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/views/HomeView.vue";
import BoardView from "@/views/BoardView.vue";
import HouseView from "@/views/HouseView.vue";
import InterestView from "@/views/InterestView.vue";
import UserView from "@/views/UserView.vue";
import UserDetailView from "@/views/UserDetailView.vue";
import KakaoMapView from "@/views/KakaoMapView";
// //import MainContent from "@/components/MainContent.vue";
// import HouseDetail from "@/components/house/HouseDetail.vue";
// import HouseList from "@/components/house/HouseList.vue";
import HouseList from "@/components/house/HouseList.vue";
import HouseRegist from "@/components/house/HouseRegist.vue";
import HouseSearch from "@/components/house/HouseSearch.vue";
// import UserDelete from "@/components/user/UserDelete.vue";
import UserLogin from "@/components/user/UserLogin.vue";
// import UserModify from "@/components/user/UserModify.vue";
import UserRegist from "@/components/user/UserRegist.vue";
// import UserDetail from "@/components/user/UserDetail.vue";
import UserRegistLevel from "@/components/user/UserRegistLevel.vue";
import InterestList from "@/components/interest/InterestList.vue";
import InterestDetail from "@/components/interest/InterestDetail.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/map",
    name: "map",
    component: KakaoMapView,
  },

  {
    path: "/house",
    name: "house",
    component: HouseView,
    children: [
      {
        path: "regist",
        name: "regist",
        component: HouseRegist,
      },
      {
        path: "search",
        name: "search",
        component: HouseSearch,
      },
      {
        path: "list/:code/:name",
        name: "list",
        component: HouseList,
      },
    ],
  },
  {
    path: "/detail",
    name: "userdetail",
    component: UserDetailView,
    // redirect: "/detail/detail",
    // children: [
    //   {
    //     path: "detail",
    //     name: "detail",
    //     component: UserDetail,
    //   },
    //   {
    //     path: "modify",
    //     name: "modify",
    //     component: UserModify,
    //   },
    // ],
  },
  {
    path: "/interest",
    name: "interest",
    component: InterestView,
    redirect: "/interest/list",
    children: [
      {
        path: "list",
        name: "interestlist",
        component: InterestList,
      },
      {
        path: "detail/:aptname",
        name: "interestdetail",
        component: InterestDetail,
      },
    ],
  },
  {
    path: "/user",
    name: "user",
    component: UserView,
    children: [
      {
        path: "registlevel",
        name: "registlevel",
        component: UserRegistLevel,
        children: [
          {
            path: "regist",
            name: "regist",
            component: UserRegist,
          },
        ],
      },
      {
        path: "login",
        name: "login",
        component: UserLogin,
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: BoardView,
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () => import("@/components/board/BoardList.vue"),
      },
    ],
  },
  {
    path: "/board",
    name: "board",
    component: () => import("@/views/BoardView.vue"),
    redirect: "/board/list",
    children: [
      {
        path: "list",
        name: "boardList",
        component: () => import("@/components/board/BoardList.vue"),
      },
      {
        path: "write",
        name: "boardRegister",
        component: () => import("@/components/board/BoardRegister.vue"),
      },
      {
        path: "detail/:articleno",
        name: "boardDetail",
        component: () => import("@/components/board/BoardDetail.vue"),
      },
      {
        path: "modify/:articleno",
        name: "boardModify",
        component: () => import("@/components/board/BoardModify.vue"),
      },
      {
        path: "delete/:articleno",
        name: "boardDelete",
        component: () => import("@/components/board/BoardDelete.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
