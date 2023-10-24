import Vue from "vue";
import VueRouter from "vue-router";
import MainMenuView from "../views/MainMenuView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: MainMenuView,
  },
  {
    path: "/artistas",
    name: "ejercicio1",
    component: () =>
      import(/* webpackChunkName: "ejercicio1" */ "../views/ArtistasView.vue"),
  },
  {
    path: "/discos",
    name: "ejercicio1_discos",
    component: () =>
      import(/* webpackChunkName: "ejercicio1" */ "../views/DiscosView.vue"),
  },
  {
    path: "/dndclases",
    name: "ejercicio2",
    component: () =>
      import(/* webpackChunkName: "ejercicio2" */ "../views/DndClasesView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
