import Vue from "vue";
import VueRouter from "vue-router";
import Question from "./components/Question.vue";
import Consultation from "./components/Consultation.vue";
import UserInfo from "./components/UserInfo.vue";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", component: UserInfo },
    { path: "/question", component: Question },
    { path: "/consultation", component: Consultation },
  ],
});

export default router;
