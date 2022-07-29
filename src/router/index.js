import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PhotoAlbumView from "../views/PhotoAlbumView.vue";
import BlogViewView from "../views/BlogView.vue";
import TheFamily from "../views/photoAlbums/TheFamily.vue";
import TheWedding from "../views/photoAlbums/TheMaternity.vue";
import TheMaternity from "../views/photoAlbums/TheWedding.vue";
import TheAdventure from "../views/photoAlbums/TheAdventure.vue";
import MaternityCarson from "../views/photoAlbums/maternity/MaternityCarson.vue";
import MaternityJudah from "../views/photoAlbums/maternity/MaternityJudah.vue";
import { auth } from "../firebase";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums",
      name: "photos",
      component: () => import("../views/PhotoAlbumView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/blog",
      name: "blog",
      component: () => import("../views/BlogView.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/family",
      name: "family",
      component: TheFamily,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/maternity",
      name: "maternity",
      component: () => import("../views/photoAlbums/TheMaternity.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/wedding",
      name: "wedding",
      component: () => import("../views/photoAlbums/TheWedding.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/maternity/carson",
      name: "maternity-carson",
      component: () =>
        import("../views/photoAlbums/maternity/MaternityCarson.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/maternity/judah",
      name: "maternity-judah",
      component: () =>
        import("../views/photoAlbums/maternity/MaternityJudah.vue"),
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/photo-albums/adventure",
      name: "adventure",
      component: () => import("../views/photoAlbums/TheAdventure.vue"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

// NAV GUARD - Does not currently work! - NAV GUARD

// routes.beforeEach((to, from, next) => {
//   if (to.path === "/login" && auth.currentUser) {
//     next("/");
//     return;
//   }

//   if (
//     to.matched.some((record) => record.meta.requiresAuth) &&
//     !auth.currentUser
//   ) {
//     next("/login");
//     return;
//   }

//   next();
// });

export default router;
