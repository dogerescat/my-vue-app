import Vue from 'vue';
import Vuex from 'vuex';

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
    moveOnPage(state, payload) {
      state.userInfo = payload.userInfo;
      state.question = payload.question;
      state.firstquestion = payload.firstquestion;
      state.secondquestion = payload.secondquestion;
      state.thirdquestion = payload.thirdquestion;
      state.consultation = payload.consultation;
    },
    returnPage(state, payload) {
      state.userInfo = payload.userInfo;
      state.question = payload.question;
      state.firstquestion = payload.firstquestion;
      state.secondquestion = payload.secondquestion;
      state.thirdquestion = payload.thirdquestion;
      state.consultation = payload.consultation;
    },
    openSecondquestion(state) {
      state.secondquestion = true;
    },
    openThirdquestion(state) {
      state.thirdquestion = true;
    },
  },
});
export default store;
