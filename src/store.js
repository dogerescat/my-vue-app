import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    gender: "",
    year: "",
    month: "",
    day: "",
    first_question: "",
    second_question: "",
    third_question: "",
    consultation: "",
  },
  mutations: {
    manageUserInfo(state, payload) {
      state.gender = payload.gender;
      state.year = payload.year;
      state.month = payload.month;
      state.day = payload.day;
    },
    manageQuestion(state, payload) {
      state.first_question = payload.first_question;
      state.second_question = payload.second_question;
      state.third_question = payload.third_question;
    },
    manageConsultation(state, payload) {
      state.consultation = payload.consultation;
    },
  },
});
export default store;
