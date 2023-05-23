<template>
  <header-component v-if="$store.state.isLogin"></header-component>
  <tab-component v-if="$store.state.isLogin"></tab-component>
  <router-view></router-view>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'
import TabComponent from './components/TabComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent,
    TabComponent
  }
}
</script>

<style>
@import url('./css/reset.css');
</style>
