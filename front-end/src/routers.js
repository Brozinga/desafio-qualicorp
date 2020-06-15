import Vue from "vue";
import VueRouter from "vue-router";
import Inicio from "./views/Inicio.vue";
import Cliente from "./views/Cliente.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "inicio", component: Inicio },
    { path: "/cliente", name: "cliente", component: Cliente },
  ],
});

export default router;
