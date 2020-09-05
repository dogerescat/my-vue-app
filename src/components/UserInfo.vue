<template>
  <div class="parent">
    <div id="user-info">
      <nav>
        <i class="far fa-address-card"></i>お客様の情報を入力してください
      </nav>
      <p class="p">-性別-</p>
      <form id="gender">
        <label>
          <input type="radio" name="radio" value="men" checked />男性
        </label>
        <label>
          <input type="radio" name="radio" value="women" />女性
        </label>
      </form>
      <p class="p">-生年月日-</p>
      <form id="birthday">
        <select v-model="year">
          <option v-for="era in eras" :key="era.year" :value="era.year">{{ era.label }}</option>
        </select>
        年
        <select v-model="month" v-on:change="get_days">
          <option v-for="n of 12" v-bind:key="n">{{n}}</option>
        </select>
        月
        <select v-model="day">
          <option v-for="n of days_max" v-bind:key="n">{{n}}</option>
        </select>日
      </form>
    </div>
    <div class="route-button">
      <router-link to="/question" class="button is-primary">次へ進む ＞</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  data: function () {
    return {
      year: 1970,
      month: 1,
      day: 1,
      days_max: '',
      eras: [],
    };
  },
  created: function () {
    this.get_days();
  },
  mounted: function () {
    this.eras = this.genereate();
  },
  methods: {
    get_days: function () {
      this.days_max = new Date(this.year, this.month, 0).getDate();
    },
    genereate() {
      const eras = [];
      for (let y = 2020; y > 1920; y--) {
        if (y > 2018) {
          eras.push({ year: y, label: `${y} (令和${y - 2018}年)` });
        } else if (y > 1988) {
          eras.push({ year: y, label: `${y} (平成${y - 1988}年)` });
        } else if (y > 1925) {
          eras.push({ year: y, label: `${y} (昭和${y - 1925}年)` });
        } else if (y > 1911) {
          eras.push({ year: y, label: `${y} (大正${y - 1911}年)` });
        }
      }
      return eras;
    },
  },
};
</script>