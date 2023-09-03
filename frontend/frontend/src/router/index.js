import { createRouter, createWebHistory } from "vue-router";
import Shark_Item from "../components/Shark.vue";
import Games_Item from "../components/Games.vue";

const routes = [
  {
    path: "/shark",
    name: "Shark",
    component: Shark_Item,
  },
  {
    path: "/games",
    name: "Games",
    component: Games_Item,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
