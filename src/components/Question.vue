<template>
  <div class="parent" v-if="stateQuestion">
    <div id="question">
      <nav>
        <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
      </nav>
      <div id="first-question" v-if="stateFirstquestion">
        <p class="p">現在生命保険に加入されていますか？</p>
        <form class="form-question" v-on:change="openSecondquestion">
          <label>
            <input type="radio" name="first" />はい
          </label>
          <label>
            <input type="radio" name="first" />いいえ
          </label>
        </form>
      </div>

      <div id="second-question" v-if="stateSecondquestion">
        <p>現在入院中ですか。または、３ヶ月以内に医師の診断、検査の結果、入院、手術を進められたことはありますか？</p>
        <form class="form-question" v-on:change="openThirdquestion">
          <label>
            <input type="radio" name="second" />はい
          </label>
          <label>
            <input type="radio" name="second" />いいえ
          </label>
        </form>
      </div>

      <div id="third-question" v-if="stateThirdquestion">
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
      <router-link
        to="/consultation"
        class="button is-primary"
        v-on:click.native="moveOnPage"
      >次へ進む ＞</router-link>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'Question',
  data: function () {
    return {
      next: {
        userInfo: false,
        question: false,
        firstquestion: false,
        secondquestion: false,
        thirdquestion: false,
        consultation: true,
      },
      previous: {
        userInfo: true,
        question: false,
        firstquestion: false,
        secondquestion: false,
        thirdquestion: false,
        consultation: false,
      },
    };
  },
  methods: {
    moveOnPage() {
      this.$store.commit('moveOnPage', {
        userInfo: this.next.userInfo,
        question: this.next.question,
        firstquestion: this.next.firstquestion,
        secondquestion: this.next.secondquestion,
        thirdquestion: this.next.thirdquestion,
        consultation: this.next.consultation,
      });
    },
    returnPage() {
      this.$store.commit('returnPage', {
        userInfo: this.previous.userInfo,
        question: this.previous.question,
        firstquestion: this.previous.firstquestion,
        secondquestion: this.previous.secondquestion,
        thirdquestion: this.previous.thirdquestion,
        consultation: this.next.consultation,
      });
    },
    openSecondquestion() {
      this.$store.commit('openSecondquestion');
    },
    openThirdquestion() {
      this.$store.commit('openThirdquestion');
    },
  },
  computed: {
    stateQuestion: function () {
      return this.$store.state.question;
    },
    stateFirstquestion: function () {
      return this.$store.state.firstquestion;
    },
    stateSecondquestion: function () {
      return this.$store.state.secondquestion;
    },
    stateThirdquestion: function () {
      return this.$store.state.thirdquestion;
    },
  },
};
</script>
