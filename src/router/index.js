import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoAlbumView from "../views/PhotoAlbumView.vue";
import BlogViewView from "../views/BlogView.vue";
import AccountManagementView from "../views/AccountManagementView.vue";
import TheFamily from "../views/photoAlbums/TheFamily.vue";
import TheWedding from "../views/photoAlbums/TheMaternity.vue";
import TheMaternity from "../views/photoAlbums/TheWedding.vue";
import TheAdventure from "../views/photoAlbums/TheAdventure.vue";
import MaternityCarson from "../views/photoAlbums/maternity/MaternityCarson.vue";
import MaternityJudah from "../views/photoAlbums/maternity/MaternityJudah.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/photo-albums",
      name: "photos",
      component: () => import("../views/PhotoAlbumView.vue"),
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
    },
    {
      path: "/account-management",
      name: "account-management",
      component: () => import("../views/AccountManagementView.vue"),
    },
    {
      path: "/photo-albums/family",
      name: "family",
      component: TheFamily,
    },
    {
      path: "/photo-albums/maternity",
      name: "maternity",
      component: () => import("../views/photoAlbums/TheMaternity.vue"),
    },
    {
      path: "/photo-albums/wedding",
      name: "wedding",
      component: () => import("../views/photoAlbums/TheWedding.vue"),
    },
    {
      path: "/photo-albums/maternity/carson",
      name: "maternity-carson",
      component: () =>
        import("../views/photoAlbums/maternity/MaternityCarson.vue"),
    },
    {
      path: "/photo-albums/maternity/judah",
      name: "maternity-judah",
      component: () =>
        import("../views/photoAlbums/maternity/MaternityJudah.vue"),
    },
    {
      path: "/photo-albums/adventure",
      name: "adventure",
      component: () => import("../views/photoAlbums/TheAdventure.vue"),
    },
  ],
});

export default router;
