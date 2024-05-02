import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/home",
    name: "home",
    component: HomeView,
  },
  {
    path: "/login",
    name: "login",
    meta: {
      title: "登入",
    },
    // 懶加載方式(動態導入)，打包時，如果某路由/元件設定了懶加載，就會獨立被拆成一個 JS 檔案，縮小主檔案的大小
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/user",
    name: "user",
    component: () => import("../views/UserPage.vue"),
    beforeEnter: (to, from, next) => {
      alert("user");
      // ...
      next();
    },
  },
  {
    path: "/explore",
    name: "explore",
    component: () => import("../views/Explore.vue"),
  },
  {
    path: "/category/:id",
    name: "category",
    component: () => import("../views/Category.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  console.log("to", to);
  console.log("from", from);
  next();
});
export default router;
