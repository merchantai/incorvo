<template>
  <top-nav class="top-nav"></top-nav>
  <WhatsappComponent />
  <FloatingContactForm />
  <FloatingDialer />
  <main class="main">
    <RouterView />
  </main>
  <footer-component class="footer"/>
</template>

<script setup>
import TopNav from '@/components/TopNav.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import WhatsappComponent from './components/WhatsappComponent.vue';
import FloatingContactForm from './components/FloatingContactForm.vue';
import FloatingDialer from './components/FloatingDialer.vue';
</script>

<style scoped>
.top-nav {
  position: fixed;
  top: 0;
  background-color: var(--light-color);
  width: 100%;
  padding: 0.5rem;
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
