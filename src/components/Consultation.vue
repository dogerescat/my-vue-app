<template>
  <div class="parent" v-show="consultation">
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
  name: "Consultation",
  methods: {
    switchFalseConsultation: function () {
      this.$store.commit("switchFalseConsultation");
    },
    switchTrueQuestion: function () {
      this.$store.commit("switchTrueQuestion");
    },
    switchFalseSecondquestion: function () {
      this.$store.commit("switchFalseSecondquestion");
    },
    switchFalseThirdquestion: function () {
      this.$store.commit("switchFalseThirdquestion");
    },
    returnPage: function () {
      this.switchFalseConsultation();
      this.switchTrueQuestion();
      this.switchFalseSecondquestion();
      this.switchFalseThirdquestion();
    },
  },
  computed: {
    consultation: function () {
      return this.$store.state.consultation;
    },
  },
};
</script>