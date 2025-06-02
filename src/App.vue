<template>
  <top-nav class="top-nav"></top-nav>
  <main class="main">
    <RouterView />
  </main>
  <footer-component class="footer"/>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue'
import FooterComponent from '@/components/FooterComponent.vue'
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  background-color: var(--light-color);
  width: 100%;
  height: 75px;
  z-index: 100;
}
.main {
  margin-top: 75px;
  position: relative;
}
.footer {
  position: static;
  bottom: 0;
}
</style>
