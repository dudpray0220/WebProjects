<template>
  <div class="app-wrapper">
    <header-component v-if="$store.state.isLogin == false"></header-component>
    <header-component-after-login v-else></header-component-after-login>

    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import HeaderComponentAfterLogin from './components/HeaderComponentAfterLogin.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent,
    HeaderComponentAfterLogin: HeaderComponentAfterLogin
  },
  data() {
    return {
    }
  }
}
</script>

<style>
@import './css/reset.css';

html {
  font-family: 'Noto Sans KR', sans-serif;
  height: 100%;
  margin: 0;
}

.app-wrapper {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
</style>
