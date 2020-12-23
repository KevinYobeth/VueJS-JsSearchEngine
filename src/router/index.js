import {createRouter, createWebHistory} from "vue-router";
import Home from "../views/Home.vue";
import SnippetDetail from "../views/SnippetDetail.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/snippet/:id",
    name: "SnippetDetail",
    component: SnippetDetail,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
