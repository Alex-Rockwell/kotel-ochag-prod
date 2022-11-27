import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: HomePage,
    },
    {
      path: "/about",
      component: () => import("../views/Page1About.vue"),
      meta: {
        publicRoute: true,
        name: "description",
        content: "О компании",
      },
    },
    {
      path: "/catalog",
      component: () => import("../views/Page2Catalog.vue"),
    },
    {
      path: "/parts",
      component: () => import("../views/Page8SpareParts.vue"),
    },
    {
      path: "/clients",
      component: () => import("../views/Page3Map.vue"),
    },
    {
      path: "/garanty",
      component: () => import("../views/Page5Garanty.vue"),
    },
    {
      path: "/contacts",
      component: () => import("../views/Page7Contacts.vue"),
    },
    {
      path: "/catalog/:seoTitle",
      component: () => import("../views/ProductPage.vue"),
    },
    {
      path: "/news",
      component: () => import("../views/Page9News.vue"),
    },
    {
      path: "/news/rasshirayem_assortiment",
      component: () => import("../views/news/NewsPage10.vue"),
    },
    {
      path: "/news/servisgaz-26-let",
      component: () => import("../views/news/NewsPage9.vue"),
    },
    {
      path: "/news/serdze_vashego_doma",
      component: () => import("../views/news/NewsPage8.vue"),
    },
    {
      path: "/news/seminari_kavkaz",
      component: () => import("../views/news/NewsPage7.vue"),
    },
    {
      path: "/news/technicheskiy_seminar",
      component: () => import("../views/news/NewsPage6.vue"),
    },
    {
      path: "/news/zayavki_na_seminari",
      component: () => import("../views/news/NewsPage5.vue"),
    },
    {
      path: "/news/standart_iso",
      component: () => import("../views/news/NewsPage4.vue"),
    },
    {
      path: "/news/uvelichennaya_garantiya",
      component: () => import("../views/news/NewsPage3.vue"),
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: "smooth" };
    } else {
      document
        .getElementById("anchor")
        .scrollIntoView({ behavior: "smooth", block: "start" });
    }
  },
});

export default router;
