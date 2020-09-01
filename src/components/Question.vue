<template>
  <div class="parent" v-if="question">
    <div id="question">
      <nav>
        <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
      </nav>
      <div id="first-question" v-if="firstquestion">
        <p class="p">現在生命保険に加入されていますか？</p>
        <form class="form-question" v-on:change="switchTrueSecondquestion">
          <label>
            <input type="radio" name="first" />はい
          </label>
          <label>
            <input type="radio" name="first" />いいえ
          </label>
        </form>
      </div>

      <div id="second-question" v-if="secondquestion">
        <p>現在入院中ですか。または、３ヶ月以内に医師の診断、検査の結果、入院、手術を進められたことはありますか？</p>
        <form class="form-question" v-on:change="switchTrueThirdquestion">
          <label>
            <input type="radio" name="second" />はい
          </label>
          <label>
            <input type="radio" name="second" />いいえ
          </label>
        </form>
      </div>

      <div id="third-question" v-if="thirdquestion">
        <p>過去5年以内に病気や怪我、手術を受けたことまたは、継続して７日間以上の入院をしたことがありますか？</p>
        <form class="form-question">
          <label>
            <input type="radio" name="third" />はい
          </label>
          <label>
            <input type="radio" name="third" />いいえ
          </label>
        </form>
      </div>
    </div>
    <div class="route-button">
      <router-link to="/" class="button is-primary" v-on:click.native="returnPage">＜ 前へ戻る</router-link>
      <router-link to="/consultation" class="button is-primary" v-on:click.native="moveOnPage">次へ進む ＞</router-link>
    </div>
  </div>
</template>
    
<script>
export default {
  name: "Question",
  methods: {
    switchFalseFirstquestion: function () {
      this.$store.commit("switchFalseFirstquestion");
    },
    switchTrueSecondquestion: function () {
      this.$store.commit("switchTrueSecondquestion");
    },
    switchFalseSecondquestion: function () {
      this.$store.commit("switchFalseSecondquestion");
    },
    switchTrueThirdquestion: function () {
      this.$store.commit("switchTrueThirdquestion");
    },
    switchFalseThirdquestion: function () {
      this.$store.commit("switchFalseThirdquestion");
    },
    switchFalseUserInfo: function () {
      this.$store.commit("switchFalseUserInfo");
    },
    switchFalseQuestion: function () {
      this.$store.commit("switchFalseQuestion");
    },
    switchTrueConsultation: function () {
      this.$store.commit("switchTrueConsultation");
    },
    switchTrueUserInfo: function () {
      this.$store.commit("switchTrueUserInfo");
    },
    moveOnPage: function () {
      this.switchFalseQuestion();
      this.switchTrueConsultation();
    },
    returnPage: function () {
      this.switchFalseQuestion();
      this.switchTrueUserInfo();
      this.switchFalseFirstquestion();
      this.switchFalseSecondquestion();
      this.switchFalseThirdquestion();
    },
  },
  computed: {
    question: function () {
      return this.$store.state.question;
    },
    firstquestion: function () {
      return this.$store.state.firstquestion;
    },
    secondquestion: function () {
      return this.$store.state.secondquestion;
    },
    thirdquestion: function () {
      return this.$store.state.thirdquestion;
    },
  },
};
</script>
