<template>
  <div class="parent">
    <div id="confirmation">
      <nav>
        <i class="far fa-file-alt"></i>以下の内容をご確認ください
      </nav>
      <div id="confirmation-screen">
        <p class="p">-性別-</p>
        <p class="answer">{{gender}}</p>
        <p class="p">-生年月日-</p>
        <p class="answer">{{year}}年{{month}}月{{day}}日</p>
        <p class="p">-現在生命保険に加入されていますか？-</p>
        <p class="answer">{{first_question}}</p>
        <p class="p">-現在入院中ですか。または、３ヶ月以内に医師の診断、検査の結果、入院、手術を進められたことはありますか？-</p>
        <p class="answer">{{second_question}}</p>
        <p class="p">-過去5年以内に病気や怪我、手術を受けたことまたは、継続して７日間以上の入院をしたことがありますか？-</p>
        <p class="answer">{{third_question}}</p>
        <p class="p">-ご相談内容-</p>
        <p class="answer">{{consultation}}</p>
      </div>
    </div>
    <router-link to="/consultation" class="button colum is-primary">＜ 前へ戻る</router-link>
    <span class="button colum is-primary">送信 ＞</span>
  </div>
</template>
<script>
export default {
  computed: {
    gender() {
      return this.$store.state.gender;
    },
    year() {
      return this.$store.state.year;
    },
    month() {
      return this.$store.state.month;
    },
    day() {
      return this.$store.state.day;
    },
    first_question() {
      return this.$store.state.first_question;
    },
    second_question() {
      return this.$store.state.second_question;
    },
    third_question() {
      return this.$store.state.third_question;
    },
    consultation() {
      return this.$store.state.consultation;
    },
  },
};
</script>