<template>
  <nav class="navbar">
    <div class="logo">
      <RouterLink to="/">
        <img src="@/assets/images/decoration/logo.svg" alt="Logo" />
      </RouterLink>
    </div>

    <ul class="menu">
      <li
        v-for="item in menuItems"
        :key="item.label"
        class="menu-item"
        @mouseenter="hoveredItem = item.label"
        @mouseleave="hoveredItem = null"
      >
        {{ item.label }}
        <ul v-if="item.submenu && hoveredItem === item.label" class="submenu">
          <li v-for="sub in item.submenu" :key="sub">{{ sub }}</li>
        </ul>
      </li>
    </ul>
    <div>123456</div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const hoveredItem = ref(null)

const menuItems = [
  { label: 'Home' },
  { label: 'Services', submenu: ['Web Dev', 'Mobile Apps', 'Design'] },
  { label: 'About' },
  { label: 'Contact', submenu: ['Email', 'Phone'] },
]
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: sans-serif;
  position: relative;
  padding: 0 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

.menu {
  display: flex;
  list-style: none;
  gap: 2rem;
  margin: 0;
  padding: 1rem 2rem;
}

.menu-item {
  position: relative;
  cursor: pointer;
}

.submenu {
  position: absolute;
  background-color: var(--light-color);
  top: 100%;
  left: 0;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  min-width: 150px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.submenu li {
  padding: 0.5rem 1rem;
  cursor: pointer;
}

.submenu li:hover {
  background: var(--secondary-light-color);
}

.logo img {
  height: 70px;
  cursor: pointer;
}
</style>
