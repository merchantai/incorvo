<template>
  <top-nav class="top-nav"></top-nav>
  <main class="main">
    <RouterView />
  </main>
  <footer>this is the footer</footer>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue'
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  background-color: var(--light-color);
  width: 100%;
  height: 75px;
}
.main {
  margin-top: 75px;
}
</style>
