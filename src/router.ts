import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Lobby from "./components/Lobby.vue";
import Room from "./components/Room.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: Lobby },
  { path: "/:id", component: Room },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
