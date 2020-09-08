<template>
  <div class="parent">
    <div id="question">
      <nav>
        <i class="fas fa-chalkboard-teacher"></i>以下にお答えください
      </nav>
      <div id="first-question">
        <p class="p">現在生命保険に加入されていますか？</p>
        <form class="form-question" v-on:change="openSecondquestion">
          <label>
            <input type="radio" v-model="first_question" value="はい" name="first" checked />はい
          </label>
          <label>
            <input type="radio" v-model="first_question" value="いいえ" name="first" />いいえ
          </label>
        </form>
      </div>

      <div id="second-question" v-if="secondquestion">
        <p class="p">現在入院中ですか。または、３ヶ月以内に医師の診断、検査の結果、入院、手術を進められたことはありますか？</p>
        <form class="form-question" v-on:change="openThirdquestion">
          <label>
            <input type="radio" v-model="second_question" value="はい" name="second" checked />はい
          </label>
          <label>
            <input type="radio" v-model="second_question" value="いいえ" name="second" />いいえ
          </label>
        </form>
      </div>

      <div id="third-question" v-if="thirdquestion">
        <p class="p">過去5年以内に病気や怪我、手術を受けたことまたは、継続して７日間以上の入院をしたことがありますか？</p>
        <form class="form-question">
          <label>
            <input type="radio" v-model="third_question" value="はい" name="third" checked />はい
          </label>
          <label>
            <input type="radio" v-model="third_question" value="いいえ" name="third" />いいえ
          </label>
        </form>
      </div>
    </div>
    <div class="route-button">
      <router-link to="/" class="button is-primary">＜ 前へ戻る</router-link>
      <router-link
        to="/consultation"
        class="button is-primary"
        v-on:click.native="manageQuestion"
      >次へ進む ＞</router-link>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'Question',
  data() {
    return {
      secondquestion: false,
      thirdquestion: false,
      firstQuestion: '',
      secondQuestion: '',
      thirdQuestion: ''
    };
  },
  methods: {
    openSecondquestion() {
      this.secondquestion = true;
    },
    openThirdquestion() {
      this.thirdquestion = true;
    },
    manageQuestion() {
      this.$store.commit('manageQuestion', {
        first_question: this.firstQuestion,
        second_question: this.secondQuestion,
        third_question: this.thirdQuestion,
      });
    },
  },
};
</script>
