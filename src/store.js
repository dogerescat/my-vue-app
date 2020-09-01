import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    userInfo: true,
    question: false,
    firstquestion: false,
    secondquestion: false,
    thirdquestion: false,
    consultation: false,
  },
  mutations: {
    switchFalseUserInfo(state) {
      state.userInfo = false;
    },
    switchTrueUserInfo(state) {
      state.userInfo = true;
    },
    switchTrueQuestion(state) {
      state.question = true;
    },
    switchFalseQuestion(state) {
      state.question = false;
    },
    switchTrueFirstquestion(state) {
      state.firstquestion = true;
    },
    switchFalseFirstquestion(state) {
      state.firstquestion = false;
    },
    switchTrueSecondquestion(state) {
      state.secondquestion = true;
    },
    switchFalseSecondquestion(state) {
      state.secondquestion = false;
    },
    switchTrueThirdquestion(state) {
      state.thirdquestion = true;
    },
    switchFalseThirdquestion(state) {
      state.thirdquestion = false;
    },
    switchTrueConsultation(state) {
      state.consultation = true;
    },
    switchFalseConsultation(state) {
      state.consultation = false;
    },
  },
});
export default store;
