<template>
  <div class="parent">
    <div id="consultation">
      <nav>
        <i class="far fa-file-alt"></i>ご相談をご記入ください
      </nav>
      <p class="p">-ご相談内容-</p>
      <form id="form-consultation">
        <textarea cols="70" rows="20" v-model="consultation"></textarea>
      </form>
    </div>
    <div class="route-button">
      <router-link to="/question" class="button colum is-primary">＜ 前へ戻る</router-link>
      <router-link
        to="/confirmation"
        class="button colum is-primary"
        v-on:click.native="manageConsultation"
      >次へ進む ＞</router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Consultation',
  data() {
    return {
      consultation: '',
    };
  },
  methods: {
    manageConsultation() {
      this.$store.commit('manageConsultation', {
        consultation: this.consultation,
      });
    },
  },
};
</script>