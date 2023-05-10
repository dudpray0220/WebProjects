<template>
  <header-component></header-component>
  <router-view></router-view>
  <footer-component></footer-component>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    HeaderComponent: HeaderComponent,
    FooterComponent: FooterComponent
  }
}
</script>

<style>
@import './css/reset.css';

html {
  font-family: 'Noto Sans KR', sans-serif;
}
</style>
