<template>
  <div class="parent" v-show="stateConsultation">
    <div id="consultation">
      <nav>
        <i class="far fa-file-alt"></i>ご相談をご記入ください
      </nav>
      <p class="p">-ご相談内容-</p>
      <form id="form-consultation">
        <textarea cols="70" rows="20"></textarea>
      </form>
    </div>
    <div class="route-button">
      <router-link
        to="/question"
        class="button colum is-primary"
        v-on:click.native="returnPage"
      >＜ 前へ戻る</router-link>
      <span class="button colum is-primary">次へ進む ＞</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Consultation',
  data: function () {
    return {
      previous: {
        userInfo: false,
        question: true,
        firstquestion: true,
        secondquestion: false,
        thirdquestion: false,
        consultation: false,
      },
    };
  },
  methods: {
    returnPage() {
      this.$store.commit('returnPage', {
        userInfo: this.previous.userInfo,
        question: this.previous.question,
        firstquestion: this.previous.firstquestion,
        secondquestion: this.previous.secondquestion,
        thirdquestion: this.previous.thirdquestion,
        consultation: this.previous.consultation,
      });
    },
  },
  computed: {
    stateConsultation: function () {
      return this.$store.state.consultation;
    },
  },
};
</script>